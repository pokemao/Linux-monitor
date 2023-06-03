<template>
  <div>
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
                  id="input13"
                  type="date"
                  placeholder="选择日期"
                  v-model="biolatency_ruleForm.biolatency_date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="1">--</el-col>
            <el-col :span="12">
              <el-form-item prop="biolatency_date2">
                <el-time-picker
                  id="input14"
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
                  id="input15"
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
                  id="input16"
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
      <div ref="biolatency" style="width: 1600px; height: 530px"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.biolatencyChart = this.$echarts.init(this.$refs.biolatency);
    this.biolatencyChart.setOption(this.biolatencyOption);
  },
};
</script>

<style scoped></style>
