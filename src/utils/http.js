import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)
import {JSEncrypt} from 'jsencrypt'

var encrypt = new JSEncrypt();
//测试
var PUBLIC_KEY = ''
PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDCOYDV3jRRZ+FedHc4NO3OH39PL/HSUJJoIyKfo5coz3kp4NUE2cz5hSdORekMZhgpShyw+zNq+CmtNWsiN2l06QbI3Avt+ce5ewZsVTwcQ6RpO+6DMicLhE9WQLRWuJh0zxRR/x0OWEhlNDzx68S1+KBGSYnkoqS92u1ghR5SmQIDAQAB'

encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');

export function key(str) {
  return encrypt.encrypt(JSON.stringify(str));
}

// export function key(str) {
//   var hex = JSON.stringify(str)
//   var data = [];
//   for (var i = 0;i<hex.length/100;i++){
//     data.push(encrypt.encrypt(JSON.stringify(hex.slice(i*100,(i+1)*100))))
//   }
//   return data
// }

export function set_time(str){
  var n = parseInt(str)*1000;
  var D = new Date(n);
  var year = D.getFullYear();//四位数年份

  var month = D.getMonth()+1;//月份(0-11),0为一月份
  month = month<10?('0'+month):month;

  var day = D.getDate();//月的某一天(1-31)
  day = day<10?('0'+day):day;

  var hours = D.getHours();//小时(0-23)
  hours = hours<10?('0'+hours):hours;

  var minutes = D.getMinutes();//分钟(0-59)
  minutes = minutes<10?('0'+minutes):minutes;

  // var seconds = D.getSeconds();//秒(0-59)
  // seconds = seconds<10?('0'+seconds):seconds;
  // var week = D.getDay();//周几(0-6),0为周日
  // var weekArr = ['周日','周一','周二','周三','周四','周五','周六'];

  var now_time = year+'-'+month+'-'+day+' '+hours+':'+minutes;
  return now_time;
}

export function VerificationLogin(str) {
  if(str.data.code == -1){
    this.$message({
      message: str.data.msg,
      type: 'warning'
    });
  }
  if (str.data.code == -2) {
    this.$router.push('/login')
  }
  if(str.data.code == -3){
    this.$message.error('你无权限操作');
  }
}

export function getMenu(data){
  var first = []
  for (var i = 0; i<data.length;i++){
    if(data[i].p_auth_id == 0){
      first.unshift(data[i])
    }
  }
  for(var i = 0; i<first.length;i++){
    first[i].children = []
    let firstId = first[i].id
    for(var s = 0; s<data.length;s++){
      if(data[s].p_auth_id == firstId){
        first[i].children.unshift(data[s])
      }
    }
  }
  for(var i = 0; i<first.length;i++){
    for(var s = 0;s < first[i].children.length; s++){
      first[i].children[s].children = []
      let secondId = first[i].children[s].id
      for(var n = 0; n<data.length;n++){
        if(data[n].p_auth_id == secondId){
          first[i].children[s].children.unshift(data[n])
        }
      }
    }
  }
  return first
}
