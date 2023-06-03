<template>
  <div>
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
                  id="input1"
                  type="date"
                  placeholder="选择日期"
                  v-model="tcpconnlat_ruleForm.tcpconnlat_date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="1">--</el-col>
            <el-col :span="12">
              <el-form-item prop="tcpconnlat_date2">
                <el-time-picker
                  id="input2"
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
                  id="input3"
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
                  id="input4"
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
      <div ref="tcpconnlat" style="width: 1600px; height: 530px"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.tcpconnlatChart = this.$echarts.init(this.$refs.tcpconnlat);
    this.tcpconnlatChart.setOption(this.tcpconnlatOption);
  },
};
</script>

<style scoped></style>
