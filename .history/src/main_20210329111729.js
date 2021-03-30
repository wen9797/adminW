import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
export * from 'echarts/src/echarts';
//import axios from "./utils/axios"
import axios from "axios"
import {VerificationLogin,key} from "./utils/http"
Vue.prototype.KEY = key;
axios.defaults.baseURL='/';
Vue.prototype.publicurl = 'api';
Vue.prototype.$http = axios;
Vue.prototype.$VerificationLogin=VerificationLogin
Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

