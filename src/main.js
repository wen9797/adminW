import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
export * from 'echarts/src/echarts';
//import axios from "./utils/axios"
import axios from "axios"
import {
  VerificationLogin,
  set_time,
  getMenu,
} from "./utils/http"
axios.defaults.baseURL='/';
Vue.prototype.set_time = set_time;
Vue.prototype.getMenu = getMenu;
Vue.prototype.$VerificationLogin=VerificationLogin
//Vue.prototype.publicurl = 'http://47.108.209.199:9501';
Vue.prototype.publicurl = 'api';
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
