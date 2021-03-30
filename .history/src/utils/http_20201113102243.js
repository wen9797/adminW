import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)
import {JSEncrypt} from 'jsencrypt'

var encrypt = new JSEncrypt();
//测试
var PUBLIC_KEY = ''
PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDCOYDV3jRRZ+FedHc4NO3OH39PL/HSUJJoIyKfo5coz3kp4NUE2cz5hSdORekMZhgpShyw+zNq+CmtNWsiN2l06QbI3Avt+ce5ewZsVTwcQ6RpO+6DMicLhE9WQLRWuJh0zxRR/x0OWEhlNDzx68S1+KBGSYnkoqS92u1ghR5SmQIDAQAB'
if (window.location.host == 'stock.wkhcs.com') {
  //测试
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDCOYDV3jRRZ+FedHc4NO3OH39PL/HSUJJoIyKfo5coz3kp4NUE2cz5hSdORekMZhgpShyw+zNq+CmtNWsiN2l06QbI3Avt+ce5ewZsVTwcQ6RpO+6DMicLhE9WQLRWuJh0zxRR/x0OWEhlNDzx68S1+KBGSYnkoqS92u1ghR5SmQIDAQAB'
} else if (window.location.host == 'stock.hs22222.com') {
  //鑫
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDV96009P5M4vqwLh7EJ5zFaibhmNXo0UBRSaQD33QM1oIwK/489yfxutFS++DqM14soi/ZBbBa25L99CiFIzhj+mT/tzFPeVwZicCfw2bL01PfEx7SsDOpnRp9UQHA42HgEeXC5h2cLyeatIxb5nJJXhlO0gvBEWhZgx76Plg2BQIDAQAB'
} else if (window.location.host == 'stock.lm555666.com') {
  //联美
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvN1lz9GSBi77pXQ/ZFna0FcLKO7hMRwrL8mhPHqo85PH1XQn5KuTGZ0ovjm8ztxY+M70+HjFoRkxUCgi/UUjg/J0522YWyvXavoSLTlrLyKB+8KbKkuY/EQ+ggdlhSCpx3kSy9kHadx3J9fzgUjjUxDMN2F0jJITDPdppJvoFewIDAQAB'
} else if (window.location.host == 'stock.hx555666.com') {
  //涵星
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDN8aW+/5s9clnE62pBrA4tn5VGhSUTOcZxfxeyKvx5EJUogYEKAKn61f0+341hAT4x1rEQHb3DWcrd3XPDyRiWiWdTDpqpMG5cjPiPug6jDp5fbNdIqlJSMlUGD8cX/ALRLaoKojI0dAWse42O4L5km4AfpVs98ZanOwDih68rxwIDAQAB'
} else if (window.location.host == 'stock.nhjiaoyiduan.com') {
  //牛弘
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrXckYVjyjLTF9kmox15tDLWfCGRvc1R8zQ+gsXRo+5vDlJzbR9vDLt2T+hsVqvPcWHYTDU8spu2IyDCVqcC4xXwPSyKOqWrpTyCwNoOGsyWNK8UAjSZ4zgxB18hYJ3M53mhCcOWXmJtpeN2yp1xuo8WmyqAT2DokVcpvMHg5d6QIDAQAB'
} else if (window.location.host == 'stock.wrpz88.com') {
  //旺润
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDfHrqGrAnB5Jyu85nEtIcvZf5hrBuZrJ0CbIlmO5HC98mAcK8NVmztWXKTLaBhbOCimgd02Wd4QiBryYW/LpYtkMR4ogGiVdWT79rGzYFuE0z+cet2IPp1L9l7dlU/tXPWlcADJ86V1+68ODswARhh8IZBW8CpCn9YfbfqPlF9hQIDAQAB'
} else if (window.location.host == 'stock.shenjie666.com') {
  //申捷
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3OFPHMkNewpZXVFjQWW/XdF2CET7/1Tl3hKSQ59FizmaoxcfDXlACJjNFqzr+HTlKqqEeVe2p9hDrPhFrKJMJKrxnJw3aijqw6lmiKoj9J9DE9/CyYeVpix2PokNosyh7sIdQ79SKijmbaYAgy31GC1xW0eaOeh+lOAtVpDWUzwIDAQAB'
} else if (window.location.host == 'stock.dingze666.com') {
  //鼎泽
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjuiXihExzyhVC1LzzH1jPagFH1w6R/4StJwt6UYEr44Ykdk97+4h8nhljlcwqELMTA9J1M5N28YpDJD3o5GJuWBWn2z55FmR6PZ+/QCJOoNCCeO4hryKYCvT+AspIkWMUjYwxgSvyzo9BrarrrXEQJvSqVCf3ySJxmWr+H9oREQIDAQAB'
} else if (window.location.host == 'stock.fcpzpz.com') {
  //富成
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDT/W0nXJQH3Vgi2iNr4ySEzN9rPVoRDa6wEl2wq+WQHH/iefhlVnQMXokQIFK4GAgfJbWCjkYTsW+qJyfmU1B7MqX5gWJb947yfhJ37V470agG+CCVeEUcrh0+1V3iwnyN5vpVKV2nY6nN/AG32IOidje0CioZE1A/D1KEp7TsmQIDAQAB'
} else if (window.location.host == 'stock.gypz666.com') {
  //国元
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaX0uPDY59Vda5UB7xQVS9pHLqF3ua3n+FelTpgcqaGJxAsmcQvTsOyjA2crxC2Q3TH06UIbqGWpV00pLLJYewRxr1RSj9PWPZikl2ZEP6cagAPkjwGoA/L5PdtvpZHmHLqFHaDZ5xbpsyQUJntlym4YoZXONjWSTDQX+7716zzQIDAQAB'
} else if (window.location.host == 'stock.cdy33.com') {
  //创达盈
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCy+pRkFcIywwzytLr2Mv5Zk8mE+O1oJaZ+eGGGJYnkispKmAXu6zA6LOR7u5GiL/7563XEOJflLVA8A+svAwSxZAtLr3iNWq1ENxh7gd52xaXraRMt3yxxjvP8ggIqTSXi20d7p4NFeFW+Rwpr7lkho8wSrAfDbSUtyAC80a2A3QIDAQAB'
} else if (window.location.host == 'stock.yinghepz.com') {
  //好配资
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC47SreRXOCxzkB47+s9wgrASHOVUP6LJc+4ijqGhc7MmWNcKodLI3NVFkMVwWiS8PxGMotjcsBB0JgAUQLFczaXONZZ3oyP6Ka4IKFD3T+4eyEE2t3OawfJcpBFD8I9TZ7zqwnGr8p9fhd3YQYmJG3id1zemXM7WlA2A3Dx7pLIwIDAQAB'
} else if (window.location.host == 'stock.299565.com') {
  //贵丰
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDkdgxuW6+xWedRsBtN9stTexIjdaWX/+oRmbXM6oN8M23TteZpQcTAMu8PdT9+ToNRW+kY1bhPN9yWXWPhMQ/+xuuV7tpnlSi2QZ85x82CID4s3pL6A9d0WFMYbhjNT+51/5jpZOVf48gaYbzQvTMZN7qMTRrdUe1NNuKaqEnnIwIDAQAB'
}else if (window.location.host == 'stock.ryjyd.com') {
  //荣耀
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2BxtJDqLHdYVUMCZtTeRtEfYLxOeABgY7NCTWexFcTlbfnwW6E2BGeHCLWZaOhT+aN6HwdyYdXNRiWuWcLnBkN/2AUC+9nlKqDxLn+m1C17Lm9djpwT5P9caos5e9jNxNo2ELuVApg/z1qeOMWEk0PV/INpr7R3B/lcOyK7KScwIDAQAB'
}else if (window.location.host == 'stock.jpzjyrj.com') {
  //简配资
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDhZELA7oCkCRwuGUZ0SShRS+v9VPhxMcuwr47oeOSi9AaG777j7yoTDC/UNE0MGQ2a7Ws3ZBBkuv57jyhPs4bbemB8LCNzB9ZA6uGVaS5GJmblymT0Ld5JO2yy15WO4rtrH9XGepDqLiArAXQFxQl+jYor2WGkLHCnDi3QQWiacQIDAQAB'
}else if (window.location.host == 'stock.sspz77.com') {
  //顺市
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjgH80wYbsJMairn9LaCBf7OYcrbLpjdLuhYrOamFQu/x3cm+bd5Qj3Afp+WjkmGPJcUs1VBxfeZxxmMX2iKHjAlaEb7gNWWFPRz1+IxCi0/3V6j++QdRE/YisCjSn6Muj/N/VOfyeCGgTwBQOusIfagsxECaSuTTNf9DyZD9kqwIDAQAB'
}else if (window.location.host == 'stock.dspzjy.com') {
  //鼎盛
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKkFR1pms+NiQn0zqzM/Bog5DsYu2RWNVCnlapVpQ/7/oH5lo3fAdOvB8RliM2CxHqCADtEWmOvJkdaUOn+G6monxx2j2H8zO1L6CotkFhjpEKkwsGjjOauj97OoTCyeNKRZFQUMOnT5xuf7Z+e9PBNSbjr48+SZpMwsKV7crNuQIDAQAB'
}else if (window.location.host == 'stock.004335.com') {
  //鼎盛2
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKkFR1pms+NiQn0zqzM/Bog5DsYu2RWNVCnlapVpQ/7/oH5lo3fAdOvB8RliM2CxHqCADtEWmOvJkdaUOn+G6monxx2j2H8zO1L6CotkFhjpEKkwsGjjOauj97OoTCyeNKRZFQUMOnT5xuf7Z+e9PBNSbjr48+SZpMwsKV7crNuQIDAQAB'
}else if (window.location.host == 'stock.ypzjyd.com') {
  //益配资
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDP7/MxiwGFFBtMgTV8bIptfSHJ2LP/jzoPS+HFd2IIwfEhR+S5prPRR4x8tWXxmOk1dJO9HXcd8FiOrloRe059va8Im+hqLeG3asVhzfa1kHPkTyZvWLSaawuWl7hUhPeZRsxGbGfAg78tWQLY+2ZidqaD1MhQ7fq8j1gpuwVYfQIDAQAB'
}else if (window.location.host == 'stock.wnsrwt.com') {
  //京海配资
  PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDacn4hIncq5uRfoNFNkc6Mey+FPQdRnGRToEk2TZv0icJFRIqx/CINu2tYHCtxlz30IiKYEIywOooiXHvTFphn0N1MSbMDdQNmC5LcLHHapVBSiWvfBQ973pOwE5jdZ5lMeuwOHhZE6XS3lh6NNGm1Q5tKZyHoGE6PlkEMPM0F9QIDAQAB'
}
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
