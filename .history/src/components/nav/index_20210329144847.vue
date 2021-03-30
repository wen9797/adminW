<template>
  <div>
    <!--顶部-->
    <el-header>
      <div class="logo"></div>
      <el-menu class="el-menu-demo header" mode="horizontal" router>
        <el-menu-item @click="exitLogin()" style="float: right;padding:0 10px;">
          <div class="header-name">退出登录</div>
        </el-menu-item>
        <el-menu-item @click="passwordShow = true" style="float: right;padding:0 10px;">
          <div class="header-name">修改密码</div>
        </el-menu-item>
      </el-menu>
    </el-header>
    <!--左侧-->
    <el-container>
      <el-scrollbar>
        <el-menu router default-active="/index">
          <el-submenu index="1">
            <template slot="title" >
              <div class="left-icon"><i class="el-icon-s-marketing"></i></div>
              <div class="icon-name" style="background: #2f4050">首页</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'stockLists'+'?time='+gettime()" v-if="menulist('/stockLists')" @contextmenu.prevent.native="openMenu($event,'stockLists')">
                <div class="left-icon2">
                  <i class="el-icon-document-copy"></i>
                </div>
                <div class="icon-name">系统统计</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">广告管理</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">banner图</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">nav图片管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">焦点图管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">活动商品</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">积分商品</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">抽签商品</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">免单商品</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">抢购商品</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">订单管理</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">全部订单</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">普通订单</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">虚拟订单</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">积分订单</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">抽签订单</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">免单订单</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">抢购订单</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">商品管理</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">分类管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">规格管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">普通商品</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">标签管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">虚拟商品</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">供应商管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">售后管理</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">售后管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">会员管理</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">普通用户</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">虚拟用户</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">SVIP管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">VIP管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">财务管理</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">充值订单</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">用户提现</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">用户资金记录</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">积分记录</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">权限管理</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">管理员管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">角色管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">节点管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <div class="left-icon"><i class="el-icon-s-tools"></i></div>
              <div class="icon-name" style="background: #2f4050">系统设置</div>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">基础设置</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">意见反馈</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">公告管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
              <el-menu-item :index="'systemPic'+'?time='+gettime()" v-if="menulist('/systemPic')" @contextmenu.prevent.native="openMenu($event,'systemPic')">
                <div class="left-icon2">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div class="icon-name">问答管理</div>
                <i class="el-icon-arrow-right right-icon"></i>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
      <el-main style="position: relative">
        <router-view/>
      </el-main>
    </el-container>
    <div v-show="NewWindow" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <el-button size="small" @click="openNewWindow()">新窗口打开</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        href:'',
        NewWindow: false,
        top: 0,
        left: 0,
        id:'',
        password: '',
        newpsw: '',
        newpsw2: '',
        passwordShow: false,
        messageList: [{}],
        activeIndex: "/index",
        menu:'',
        user_name:'',
      }
    },
    mounted: function () {
      // if (!localStorage['stock_token'] || !localStorage['menu'] ) {
      //   this.$router.push('/login')
      // }
      this.menu = localStorage['menu']
      this.getData()
    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = '';
    },
    methods: {
      gettime(){
        return new Date().getTime()
      },
      openMenu(e,a) {
        this.href = a
        this.top = e.clientY // fix 位置bug
        this.left = e.clientX+30 // fix 位置bug
        this.NewWindow = !this.NewWindow
      },
      exitLogin(){
        localStorage.clear();
        sessionStorage.clear();
        this.$router.push('/login')
      },
      menulist(a){
        //console.log(a)
        //console.log(this.menu.indexOf(a)!= -1)
        //return this.menu.indexOf(a)!= -1
        return true
      },
      message() {
        this.getmessageList();
        this.messageShow = true
      },
      getData(){
        var _this = this
        this.$http.get(this.publicurl + '/admin/auths/list', {
          //data: this.data
        })
            .then(function (res) {
            console.log(res)
          })
      },
      passwordEdit() {
        var _this = this
        if (this.newpsw != this.newpsw2) {
          _this.$message.error({
            message: '两次输入不一致',
          });
          return
        }
        var str = {
          'k': localStorage['stock_token'],
          'old': this.password,
          'new': this.newpsw,
          'new2': this.newpsw2,
        };
        this.data = this.KEY(str);
        this.$http.post('' + 'stock/admin/resetPas', {
          data: this.data
        })
          .then(function (res) {
            if (res.data.code != 200) {
              _this.$message({
                message: res.data.msg,
                type: 'warning'
              });
            } else {
              _this.passwordShow = false
              _this.$message({
                message: res.data.msg,
                type: 'success'
              });
            }
          })
      },
    }
  }
</script>

<style scoped>
  .contextmenu{
    position: absolute;
    width: 100px;
    height: 40px;
  }
  .left-icon-image {
    margin-top: 10px;
    width: 30px;
    height: 30px;
    display: block;
  }

  .password-inp {
    margin: 15px;
  }

  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background: transparent;
  }

  .message-number {
    color: #fff;
    right: 10px;
    border-radius: 10px;
    position: absolute;
    padding: 3px;
    font-size: 10px;
    line-height: 10px;
    background: #f10;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom:none !important;
  }

  .header {
    background: #2c4a68;
  }

  .header-name {
    color: #fff;
    font-size: 15px;
    height: 15px;
    line-height: 60px;
  }

  .header-title-icon {
    padding: 5px;
    width: 30px;
    height: 30px;
    display: block;
  }

  .icon-name {
    line-height: 58px;
    color: #fff;
    background: #2c4a68;
    width: 200px;
    left: 0;
    text-align: center;
    position: absolute;
  }
  .left-icon2 > i{
    color: #fff;
  }

  .left-icon > i{
    z-index: 9999;
    color: #fff;
  }

  .left-icon2 {
    color: #fff;
    line-height: 56px;
    position: absolute;
    left: 30px;
    z-index: 10;
  }

  .left-icon {
    color: #fff;
    z-index: 20;
    line-height: 56px;
    position: absolute;
    left: 20px;
  }

  .right-icon {
    color: #fff;
    line-height: 56px;
    position: absolute;
    right: 8px;
  }

  .footer {
    z-index: 10;
    width: 100%;
    bottom: 0;
    right: 0;
    position: fixed;
    height: 30px;
    background: #2c4a68;
  }

  .el-scrollbar__wrap::-webkit-scrollbar {
    display: none
  }

  .el-menu-item-group__title {
    padding: 0 !important;
  }

  .el-submenu .el-menu-item {
    text-align: right;
  }

  .el-menu-item-group{
    width: 200px !important;
  }

  .el-scrollbar__wrap {
    overflow: hidden;
  }

  .logo {
    /*background-image: url("../../image/logo.jpg");*/
    width: 200px;
    height: 60px;
    float: left;
  }

  .el-menu-item {
    color: #303133;
  }

  .el-menu-demo {
    margin-left: 200px;
  }

  .el-scrollbar {
    width: 200px;
    background: #2c4a68;
    min-width: 200px;
  }

  .el-header, .el-footer {
    padding: 0;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    overflow-x: hidden;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  .el-container {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
