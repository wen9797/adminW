<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted: function () {
    },
}
</script>

<style>
  .el-dialog__body{
    padding-top: 10px;
  }
  html, body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom:none !important;
  }
  .el-submenu .el-menu-item{
    line-height: 56px;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a1a3a9;
    border-radius: 3px;
  }
  .el-submenu__icon-arrow{
    font-size: 18px;
  }
  .el-image__error{
    display: none;
  }
  .el-menu-item-group__title{
    padding: 0 !important;
  }
  .fl-l{
    float: left;
  }
  .el-scrollbar__wrap::-webkit-scrollbar{
    display:none
  }
  input:-webkit-autofill {
    background-color: #FFF;
    color: #000;
  }
  .el-submenu__title , .el-submenu__title i{
    color: #fff !important;
  }
  html body {
    padding: 0;
    border: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
