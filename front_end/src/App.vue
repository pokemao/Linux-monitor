<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px">
      <h1 class="side_txt">系统监控大盘</h1>
    </el-aside>
    <el-container>
      <el-header> 欢迎进入监控专区 </el-header>
      <el-main>
        <el-card shadow="hover">
          <h2>tcp连接耗时</h2>
          <div class="form">
            <el-form
              :model="tcpconnlat_ruleForm"
              :rules="tcpconnlat_rules"
              ref="tcpconnlat_ruleForm"
              label-width="200px"
              class="demo-ruleForm"
            >
              <el-form-item label="起始时间" required>
                <el-col :span="11">
                  <el-form-item prop="tcpconnlat_date1">
                    <el-date-picker
                      type="date"
                      placeholder="结束时间"
                      v-model="tcpconnlat_ruleForm.tcpconnlat_date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="12">
                  <el-form-item prop="tcpconnlat_date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="tcpconnlat_ruleForm.tcpconnlat_date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="结束时间" required>
                <el-col :span="11">
                  <el-form-item prop="tcpconnlat_date3">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="tcpconnlat_ruleForm.tcpconnlat_date3"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="12">
                  <el-form-item prop="tcpconnlat_date4">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="tcpconnlat_ruleForm.tcpconnlat_date4"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('tcpconnlat')"
                  >展示内容</el-button
                >
                <el-button @click="resetForm('tcpconnlat')">重置选项</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div ref="tcpconnlat" style="width: 1600px; height: 600px"></div>
        </el-card>
        <br />
        <el-card shadow="hover">
          <h2>tcp重传数</h2>

          <div class="form">
            <el-form
              :model="tcpretrans_ruleForm"
              :rules="tcpretrans_rules"
              ref="tcpretrans_ruleForm"
              label-width="200px"
              class="demo-ruleForm"
            >
              <el-form-item label="起始时间" required>
                <el-col :span="11">
                  <el-form-item prop="tcpretrans_date1">
                    <el-date-picker
                      type="date"
                      placeholder="结束时间"
                      v-model="tcpretrans_ruleForm.tcpretrans_date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="12">
                  <el-form-item prop="tcpretrans_date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="tcpretrans_ruleForm.tcpretrans_date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="结束时间" required>
                <el-col :span="11">
                  <el-form-item prop="tcpretrans_date3">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="tcpretrans_ruleForm.tcpretrans_date3"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="12">
                  <el-form-item prop="tcpretrans_date4">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="tcpretrans_ruleForm.tcpretrans_date4"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('tcpretrans')"
                  >展示内容</el-button
                >
                <el-button @click="resetForm('tcpretrans')">重置选项</el-button>
              </el-form-item>
            </el-form>
          </div>

          <div ref="tcpretrans" style="width: 1600px; height: 600px"></div>
        </el-card>
        <br />
        <el-card shadow="hover">
          <h2>tcp往返时延</h2>
          <div class="form">
            <el-form
              :model="tcprtt_ruleForm"
              :rules="tcprtt_rules"
              ref="tcprtt_ruleForm"
              label-width="200px"
              class="demo-ruleForm"
            >
              <el-form-item label="起始时间" required>
                <el-col :span="11">
                  <el-form-item prop="tcprtt_date1">
                    <el-date-picker
                      type="date"
                      placeholder="结束时间"
                      v-model="tcprtt_ruleForm.tcprtt_date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="12">
                  <el-form-item prop="tcprtt_date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="tcprtt_ruleForm.tcprtt_date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="结束时间" required>
                <el-col :span="11">
                  <el-form-item prop="tcprtt_date3">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="tcprtt_ruleForm.tcprtt_date3"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="12">
                  <el-form-item prop="tcprtt_date4">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="tcprtt_ruleForm.tcprtt_date4"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('tcprtt')"
                  >展示内容</el-button
                >
                <el-button @click="resetForm('tcprtt')">重置选项</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div ref="tcprtt" style="width: 1600px; height: 600px"></div>
        </el-card>
        <br />
        <el-card shadow="hover">
          <h2>I/O时间</h2>
          <div class="form">
            <el-form
              :model="biolatency_ruleForm"
              :rules="biolatency_rules"
              ref="biolatency_ruleForm"
              label-width="200px"
              class="demo-ruleForm"
            >
              <el-form-item label="起始时间" required>
                <el-col :span="11">
                  <el-form-item prop="biolatency_date1">
                    <el-date-picker
                      type="date"
                      placeholder="结束时间"
                      v-model="biolatency_ruleForm.biolatency_date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="12">
                  <el-form-item prop="biolatency_date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="biolatency_ruleForm.biolatency_date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="结束时间" required>
                <el-col :span="11">
                  <el-form-item prop="biolatency_date3">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="biolatency_ruleForm.biolatency_date3"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="12">
                  <el-form-item prop="biolatency_date4">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="biolatency_ruleForm.biolatency_date4"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('biolatency')"
                  >展示内容</el-button
                >
                <el-button @click="resetForm('biolatency')">重置选项</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div ref="biolatency" style="width: 1600px; height: 600px"></div>
        </el-card>
      </el-main>
      <el-footer> ©2023 Created by PokeMao </el-footer>
    </el-container>
  </el-container>
</template>

<script>
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
    this.tcpconnlatChart = this.$echarts.init(this.$refs.tcpconnlat);
    this.tcpretransChart = this.$echarts.init(this.$refs.tcpretrans);
    this.tcprttChart = this.$echarts.init(this.$refs.tcprtt);
    this.biolatencyChart = this.$echarts.init(this.$refs.biolatency);
    this.tcpconnlatChart.setOption(this.tcpconnlatOption);
    this.tcprttChart.setOption(this.tcprttOption);
    this.tcpretransChart.setOption(this.tcpretransOption);
    this.biolatencyChart.setOption(this.biolatencyOption);
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
              res.forEach( ele => {
                temp.push(ele.latency);
              })
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
</script>

<style scoped>
.el-aside {
  color: #333;
  background-color: rgb(238, 241, 246);
  text-align: center;
}
.el-header {
  background-color: rgb(238, 241, 246);
  height: 50px;
  text-align: right;
  line-height: 50px;
  color: #333;
}
.el-footer {
  background-color: rgb(238, 241, 246);
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #333;
  font-size: 12px;
}
.side_txt {
  margin-top: 100px;
  font-size: 28px;
}
h2 {
  font-size: 20px;
}
.form {
  margin-top: 20px;
  width: 500px;
}

</style>
