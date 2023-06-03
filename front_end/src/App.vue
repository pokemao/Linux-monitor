<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px">
      <h1 class="side_txt">系统监控大盘</h1>
      <el-menu class="el-aside" :default-openeds="['1', '3']">
        <el-menu-item-group>
          <el-menu-item index="1" @click="change(1)">tcpconnlat</el-menu-item>
          <el-menu-item index="2" @click="change(2)">tcpretrans</el-menu-item>
          <el-menu-item index="3" @click="change(3)">tcprtt</el-menu-item>
          <el-menu-item index="4" @click="change(4)">biolatency</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header> 欢迎进入监控专区 </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer> ©2023 Created by PokeMao </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    change(num) {
      switch (num) {
        case 1: {
          this.$router.push("/");
          break;
        }
        case 2: {
          this.$router.push("/tcpretrans");
          break;
        }
        case 3: {
          this.$router.push("/tcprtt");
          break;
        }
        case 4: {
          this.$router.push("/biolatency");
          break;
        }
        default: {
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.el-aside {
  color: #333;
  background-color: rgb(238, 241, 246);
  text-align: center;
  overflow: hidden;
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
  margin: 100px 0;
  font-size: 28px;
}
</style>
