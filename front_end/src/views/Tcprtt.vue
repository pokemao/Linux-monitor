<template>
  <div>
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
                  id="input9"
                  type="date"
                  placeholder="选择日期"
                  v-model="tcprtt_ruleForm.tcprtt_date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="1">--</el-col>
            <el-col :span="12">
              <el-form-item prop="tcprtt_date2">
                <el-time-picker
                  id="input10"
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
                  id="input11"
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
                  id="input12"
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
      <div ref="tcprtt" style="width: 1600px; height: 530px"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.tcprttChart = this.$echarts.init(this.$refs.tcprtt);
    this.tcprttChart.setOption(this.tcprttOption);
  },
};
</script>

<style scoped></style>
