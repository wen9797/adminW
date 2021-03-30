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
// Vue.prototype.publicurl = 'http://stock.wkhcs.com/';
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

/**
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \\|     |// '.
 *                 / \\|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *               佛祖保佑         永无BUG
 *      佛曰:
 *           写字楼里写字间，写字间里程序员；
 *           程序人员写程序，又拿程序换酒钱。
 *           酒醒只在网上坐，酒醉还来网下眠；
 *           酒醉酒醒日复日，网上网下年复年。
 *           但愿老死电脑间，不愿鞠躬老板前；
 *           奔驰宝马贵者趣，公交自行程序员。
 *           日撸代码三千行，犹如饥渴似疯狂。
 *           别人笑我忒疯癫，我笑自己命太贱；
 *           不见满街漂亮妹，哪个归得程序员？
 *           少年投身IT行，老来无伴又何妨。
 *           擦肩美女不屑看，三千码友在身旁。
 */
