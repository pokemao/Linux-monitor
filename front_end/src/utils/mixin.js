import { get } from "@/utils/http";

export default {
  data() {
    return {
        tcpconnlatChart: null,
        tcpretransChart: null,
        tcprttChart: null,
        biolatencyChart: null,
        tcpconnlat_ruleForm: {
          tcpconnlat_date1: "",
          tcpconnlat_date2: "",
          tcpconnlat_date3: "",
          tcpconnlat_date4: "",
        },
        tcpretrans_ruleForm: {
          tcpretrans_date1: "",
          tcpretrans_date2: "",
          tcpretrans_date3: "",
          tcpretrans_date4: "",
        },
        tcprtt_ruleForm: {
          tcprtt_date1: "",
          tcprtt_date2: "",
          tcprtt_date3: "",
          tcprtt_date4: "",
        },
        biolatency_ruleForm: {
          biolatency_date1: "",
          biolatency_date2: "",
          biolatency_date3: "",
          biolatency_date4: "",
        },
        tcpconnlat_rules: {
          tcpconnlat_date1: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          tcpconnlat_date2: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
          tcpconnlat_date3: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          tcpconnlat_date4: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
        },
        tcpretrans_rules: {
          tcpretrans_date1: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          tcpretrans_date2: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
          tcpretrans_date3: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          tcpretrans_date4: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
        },
        tcprtt_rules: {
          tcprtt_date1: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          tcprtt_date2: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
          tcprtt_date3: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          tcprtt_date4: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
        },
        biolatency_rules: {
          biolatency_date1: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          biolatency_date2: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
          biolatency_date3: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change",
            },
          ],
          biolatency_date4: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change",
            },
          ],
        },
        tcpretransOption: {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {},
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            name: "重传次数/次",
            type: "value",
            boundaryGap: [0, 0.01],
          },
          yAxis: {
            name: "src_ip:src_port->dst_ip:dst_port",
            type: "category",
            data: [],
          },
          series: [],
        },
        tcpconnlatOption: {
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: [],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            name: "时间",
            type: "time",
            boundaryGap: false,
          },
          yAxis: {
            name: "耗时/ms",
            type: "value",
          },
          series: [],
        },
        tcprttOption: {
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: [],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            name: "时间",
            type: "time",
            boundaryGap: false,
          },
          yAxis: {
            name: "时延/ms",
            type: "value",
          },
          series: [],
        },
        biolatencyOption: {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {},
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            name: "处于此latency的设备个数",
            type: "value",
            boundaryGap: [0, 0.01],
          },
          yAxis: {
            name: "latency区间分布/us",
            type: "category",
            data: [],
          },
          series: [],
        },
      };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例

  },
  methods: {
    // 获取起始时间和结束时间的函数
    getTime(form) {
      // 调整日期
      // 起始时间
      const startYear = this[`${form}_ruleForm`][`${form}_date1`].getFullYear();
      const startMonth = this[`${form}_ruleForm`][`${form}_date1`].getMonth();
      const startDate = this[`${form}_ruleForm`][`${form}_date1`].getDate();
      const startHours = this[`${form}_ruleForm`][`${form}_date2`].getHours();
      const startMinutes =
        this[`${form}_ruleForm`][`${form}_date2`].getMinutes();
      const startSeconds =
        this[`${form}_ruleForm`][`${form}_date2`].getSeconds();
      // 结束时间
      const endYear = this[`${form}_ruleForm`][`${form}_date3`].getFullYear();
      const endMonth = this[`${form}_ruleForm`][`${form}_date3`].getMonth();
      const endDate = this[`${form}_ruleForm`][`${form}_date3`].getDate();
      const endHours = this[`${form}_ruleForm`][`${form}_date4`].getHours();
      const endMinutes = this[`${form}_ruleForm`][`${form}_date4`].getMinutes();
      const endSeconds = this[`${form}_ruleForm`][`${form}_date4`].getSeconds();

      const start = new Date(
        startYear,
        startMonth,
        startDate,
        startHours,
        startMinutes,
        startSeconds
      );
      const end = new Date(
        endYear,
        endMonth,
        endDate,
        endHours,
        endMinutes,
        endSeconds
      );

      // 起始时间大于结束时间
      if (start.getTime() > end.getTime()) {
        // 提醒输入错误
        this.$message({
          showClose: true,
          message: `${form}: 结束时间不能比开始时间小`,
          type: "error",
        });
        return [null, null];
      }
      return [start, end];
    },
    submitForm(formName) {
      this.$refs[`${formName}_ruleForm`].validate(async (valid) => {
        if (valid) {
          // 获取日期
          const [start, end] = this.getTime(formName);
          if (!start) {
            return;
          }
          // 将日期传送到后端
          const res = await get(`main/${formName}`, { start, end });
          if (!res.length) {
            // 没有任何结果
            this.$message({
              showClose: true,
              message: `${formName}: 此时间段中没有数据`,
              type: "warn",
            });
          }
          switch (formName) {
            case "tcpconnlat": {
              const newRes = {};
              res.forEach(
                ({
                  src_ip,
                  src_port,
                  dest_ip,
                  dest_port,
                  lat_time,
                  createAt,
                }) => {
                  if (
                    newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`]
                  ) {
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].createAt.push(createAt);
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].lat_time.push(lat_time);
                    newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`]
                      .count++;
                  } else {
                    newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`] =
                      {};
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].createAt = [];
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].lat_time = [];
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].count = 1;
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].createAt.push(createAt);
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].lat_time.push(lat_time);
                  }
                }
              );
              const data = Object.keys(newRes);
              const series = [];
              console.log(series);
              data.forEach((ele) => {
                series.push({
                  name: ele,
                  type: "line",
                  stack: "total",
                  data: (function () {
                    const ret = [];
                    for (let i = 0; i < newRes[ele].count; i++) {
                      ret.push([
                        new Date(newRes[ele].createAt[i]),
                        newRes[ele].lat_time[i],
                      ]);
                    }
                    return ret;
                  })(),
                });
              });
              this.tcpconnlatOption = {
                tooltip: {
                  trigger: "axis",
                },
                legend: {
                  data,
                },
                grid: {
                  left: "3%",
                  right: "4%",
                  bottom: "3%",
                  containLabel: true,
                },
                toolbox: {
                  feature: {
                    saveAsImage: {},
                  },
                },
                xAxis: {
                  name: "时间",
                  type: "time",
                  boundaryGap: false,
                },
                yAxis: {
                  name: "耗时/us",
                  type: "value",
                },
                series: series,
              };
              this.tcpconnlatChart.setOption(this.tcpconnlatOption);
              break;
            }
            case "tcpretrans": {
              const newRes = {};
              res.forEach(({ src_ip, src_port, dest_ip, dest_port }) => {
                if (newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`]) {
                  newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`]++;
                } else {
                  newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`] = 1;
                }
              });
              this.tcpretransOption = {
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    type: "shadow",
                  },
                },
                legend: {},
                grid: {
                  left: "3%",
                  right: "4%",
                  bottom: "3%",
                  containLabel: true,
                },
                xAxis: {
                  name: "重传次数/次",
                  type: "value",
                  boundaryGap: [0, 0.01],
                },
                yAxis: {
                  name: "src_ip:src_port->dst_ip:dst_port",
                  type: "category",
                  data: Object.keys(newRes),
                },
                series: [
                  {
                    type: "bar",
                    data: Object.values(newRes),
                  },
                ],
              };
              this.tcpretransChart.setOption(this.tcpretransOption);
              break;
            }
            case "tcprtt": {
              // 声明一个map
              const newRes = {};
              res.forEach(
                ({
                  src_ip,
                  src_port,
                  dest_ip,
                  dest_port,
                  rtt_time,
                  createAt,
                }) => {
                  if (
                    newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`]
                  ) {
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].createAt.push(createAt);
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].rtt_time.push(rtt_time / 1000);
                    newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`]
                      .count++;
                  } else {
                    newRes[`${src_ip}:${src_port}->${dest_ip}:${dest_port}`] =
                      {};
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].createAt = [];
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].rtt_time = [];
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].count = 1;
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].createAt.push(createAt);
                    newRes[
                      `${src_ip}:${src_port}->${dest_ip}:${dest_port}`
                    ].rtt_time.push(rtt_time / 1000);
                  }
                }
              );
              const data = Object.keys(newRes);
              const series = [];
              data.forEach((ele) => {
                series.push({
                  name: ele,
                  type: "line",
                  stack: "total",
                  data: (function () {
                    const ret = [];
                    for (let i = 0; i < newRes[ele].count; i++) {
                      ret.push([
                        new Date(newRes[ele].createAt[i]),
                        newRes[ele].rtt_time[i],
                      ]);
                    }
                    return ret;
                  })(),
                });
              });
              this.tcprttOption = {
                tooltip: {
                  trigger: "axis",
                },
                legend: {
                  data,
                },
                grid: {
                  left: "3%",
                  right: "4%",
                  bottom: "3%",
                  containLabel: true,
                },
                toolbox: {
                  feature: {
                    saveAsImage: {},
                  },
                },
                xAxis: {
                  name: "时间",
                  type: "time",
                  boundaryGap: false,
                },
                yAxis: {
                  name: "时延/ms",
                  type: "value",
                },
                series: series,
              };
              this.tcprttChart.setOption(this.tcprttOption);
              break;
            }
            case "biolatency": {
              const temp = [];
              res.forEach((ele) => {
                temp.push(ele.latency);
              });
              const max = Math.max.apply(null, temp);
              const newRes = [];
              let j = 0;
              for (let i = 0; Math.pow(2, i) <= max; i++) {
                newRes[i] = 0;
                let tmp = Math.pow(2, i);
                while (temp[j] <= tmp) {
                  newRes[i]++;
                  j++;
                }
              }
              const yData = [];
              for (let i = 0; i < newRes.length; i++) {
                if (i == 0) {
                  yData[i] = `0 -> ${Math.pow(2, i)}`;
                  continue;
                }
                yData[i] = `${Math.pow(2, i - 1) + 1} -> ${Math.pow(2, i)}`;
              }
              this.biolatencyOption = {
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    type: "shadow",
                  },
                },
                legend: {},
                grid: {
                  left: "3%",
                  right: "4%",
                  bottom: "3%",
                  containLabel: true,
                },
                xAxis: {
                  name: "处于此latency的设备个数",
                  type: "value",
                  boundaryGap: [0, 0.01],
                },
                yAxis: {
                  name: "latency区间分布/us",
                  type: "category",
                  data: yData,
                },
                series: [
                  {
                    type: "bar",
                    data: newRes,
                  },
                ],
              };
              this.biolatencyChart.setOption(this.biolatencyOption);
              break;
            }
            default:
              break;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
