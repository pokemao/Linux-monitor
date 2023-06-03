<template>
  <div>
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
                  id="input5"
                  type="date"
                  placeholder="选择日期"
                  v-model="tcpretrans_ruleForm.tcpretrans_date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="1">--</el-col>
            <el-col :span="12">
              <el-form-item prop="tcpretrans_date2">
                <el-time-picker
                  id="input6"
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
                  id="input7"
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
                  id="input8"
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

      <div ref="tcpretrans" style="width: 1600px; height: 530px"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.tcpretransChart = this.$echarts.init(this.$refs.tcpretrans);
    this.tcpretransChart.setOption(this.tcpretransOption);
  },
};
</script>

<style scoped></style>
