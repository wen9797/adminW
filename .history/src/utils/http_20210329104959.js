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

export function VerificationLogin(str) {
  if (str.data.code == 401) {
    this.$router.push('/login')
  }
}
