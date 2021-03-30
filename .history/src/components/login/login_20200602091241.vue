<template>
  <div class="bg">
    <div class="login-info">
      <h3>后台管理系统</h3>
      <div class="login-content">
        <div class="login-form">
          <div class="login-input">
            <el-input placeholder="请输入登录名" size="small" @keyup.enter.native="sendPsot" v-model.trim="login" clearable></el-input>
          </div>
        </div>
        <div class="login-form">
          <div class="login-input">
            <el-input placeholder="请输入密码" size="small" @keyup.enter.native="sendPsot" v-model.trim="password" show-password></el-input>
          </div>
        </div>
        <div class="login-form">
          <div class="login-input">
            <el-input style="width: 80px;" size="small"  placeholder="验证码" @keyup.enter.native="sendPsot"
                      v-model.trim="code"></el-input>
          </div>
          <div class="login-image">
            <img style="width: 100px;height: 30px" :src="url" alt=""
                 @click="url='/stock/adminlogin/checkVerify?'+new Date().getTime()"/>
          </div>
        </div>
        <div class="login-button">
          <div class="button-right">
            <el-button type="primary" size="small" @click="sendPsot">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Message} from 'element-ui'
  export default {
    name: "login",
    data() {
      return {
        url: '',
        login: '',
        code: '',
        password: '',
        data: ''
      }
    },
    mounted: function () {
      this.url = 'http://'+window.location.host+'/stock/adminlogin/checkVerify?'+new Date().getTime()
    },
    methods: {
      sendPsot() {
        var _this = this
        var str = {
          'code': this.code,
          'password': this.password,
          'account': this.login,
        };
        this.data = this.KEY(str);
        this.$http.post( ''+'stock/adminlogin/login', {
          data: this.data
        })
          .then(function (res) {
            if (res.data.code != 200) {
              _this.$message({
                message: res.data.msg,
                type: 'warning'
              });
            } else {
              localStorage['stock_token'] = res.data.data.token;
              localStorage["menu"] = res.data.data.menu;
              sessionStorage["stock_token"] = res.data.data.token;
              sessionStorage["menu"] = res.data.data.menu;
              _this.$router.push('/index')
            }
          })
      }

    }
  }
</script>

<style scoped>
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../image/bg.jpg");
    background-size: 100% 100%;
  }

  .login-button {
    width: 70%;
    margin: auto;
  }

  .button-right button {
    width: 100%;
  }

  .login-form {
    width: 70%;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-input {
    flex: 5;
  }

  .login-image {
    flex: 2;
  }

  .login-name {
    flex: 2;
    text-align: center;
    font-size: 16px;
  }

  h3 {
    color: #fff;
    text-align: center;
  }

  .login-content {
    height: 200px;
  }

  .login-info {
    background: rgba( 240,240,240,0.3);
    width: 280px;
    height: 260px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*box-shadow: 0 0 50px #a0a0a0;*/
  }
</style>
