from prometheus_client import start_http_server, Gauge
from socket import inet_ntop, AF_INET
from bcc import BPF
import struct
import pymysql


DBHOST = 'localhost'
DBUSER = 'root'
DBPASS = '12345678'
DBNAME = 'software_test'
DBPORT = 3306

try:
    db = pymysql.connect(host=DBHOST, user=DBUSER, password=DBPASS, database=DBNAME, port=DBPORT)
    print('数据库成功连接')
except pymysql.Error as e:
    print('数据库连接失败'+str(e))

# 加载 ebpf 程序
bpf_text = """
#ifndef __INTELLISENSE__

#include <net/inet_sock.h>
#include <uapi/linux/ptrace.h>

struct data_t {
    u64 ts;
    u64 rtt_ns;
    u32 dest_ip;
    u32 src_ip;
    u16 dest_port;
    u16 src_port;
};

BPF_HASH(start, struct sock*, struct data_t);

BPF_PERF_OUTPUT(events);

int trace_tcp_send(struct pt_regs* ctx, struct sock* sk) {
    if (sk == NULL) return 0;

    struct data_t data = {};

    data.ts        = bpf_ktime_get_ns();
    data.src_ip    = sk->__sk_common.skc_rcv_saddr;
    data.dest_ip   = sk->__sk_common.skc_daddr;
    data.src_port  = sk->__sk_common.skc_num;
    data.dest_port = sk->__sk_common.skc_dport;

    start.update(&sk, &data);

    return 0;
}

int trace_tcp_ack(struct pt_regs* ctx, struct sock* sk) {
    struct data_t* datap = start.lookup(&sk);

    if (datap == NULL) return 0;

    u64 rtt_ns    = bpf_ktime_get_ns() /* ack time */ - datap->ts;
    datap->rtt_ns = rtt_ns;

    events.perf_submit(ctx, datap, sizeof(struct data_t));

    start.delete(&sk);

    return 0;
}

#endif
"""

b = BPF(text=bpf_text)

# 对内核事件进行插桩
b.attach_kprobe(event="tcp_sendmsg", fn_name="trace_tcp_send")
b.attach_kprobe(event="tcp_ack", fn_name="trace_tcp_ack")

# 定义 Prometheus 指标
arg = "tcprtt_ns", "TCP往返延迟(纳秒)", ["src_ip", "dest_ip", "src_port", "dest_port"]
tcp_rtt_gauge = Gauge(*arg)


def ip_to_str(addr):
    return inet_ntop(AF_INET, struct.pack("I", addr))


def handle_event(cpu, data, size):
    event = b["events"].event(data)

    tcp_rtt_gauge.labels(
        src_ip=ip_to_str(event.src_ip),
        dest_ip=ip_to_str(event.dest_ip),
        src_port=event.src_port,
        dest_port=event.dest_port,
    ).set(event.rtt_ns)

    if (str(event.src_port) == "3306") or (str(event.src_port) == "43080") or (str(event.dest_port) == "59916") or (str(event.src_port) == "22"):
        return
    try:
        cur = db.cursor()
#        sql='INSERT INTO tcprtt(src_ip, dest_ip, src_port, dest_port, rtt_time) VALUE(?,?,?,?,?)'
        sql='INSERT INTO tcprtt(src_ip, dest_ip, src_port, dest_port, rtt_time) VALUE(%s,%s,%s,%s,%s)'
#        value = ("a", "b", "c", "d", "12314234")
        value = (ip_to_str(event.src_ip), ip_to_str(event.dest_ip), str(event.src_port), str(event.dest_port), str(event.rtt_ns))
        cur.execute(sql, value)
        db.commit()
    except pymysql.Error as e:
        print("表格创建失败"+str(e))
        db.rollback()
#    print("--------------------------------------------------")
#    print(type(ip_to_str(event.src_ip)), type(str(event.src_port)), type(int(event.rtt_ns)))


b["events"].open_perf_buffer(handle_event)

if __name__ == "__main__":
    start_http_server(8000)

    print("Server is start at http://127.0.0.1:8000")

    try:
        while True:
            b.perf_buffer_poll()
    except KeyboardInterrupt:
        print("\nexiting...")

        # 清理内核事件
        b.detach_kprobe(event="tcp_sendmsg", fn_name="trace_tcp_send")
        b.detach_kprobe(event="tcp_ack", fn_name="trace_tcp_ack")
        db.close()
