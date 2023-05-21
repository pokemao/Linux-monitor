import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common/common.css'
import * as echarts from 'echarts';



Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts;
Vue.prototype.$message = ElementUI.Message;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
