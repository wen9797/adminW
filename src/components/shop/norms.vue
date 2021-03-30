<!--<template>
  <div class="app">
    <!-- 上面的搜索 -->
    <!-- <el-card class="box-card">
      <div class="add-list">
        <el-button @click="openAdmin('add','')" size="small">添加分类</el-button>
      </div>
      <div style="clear: both"></div>
    </el-card>

    <div style="height: 15px"></div>
    <el-card class="box-card">
      <el-table
        :data="tableData"
        :height="tableHeight"
        style="width: 100%" stripe
        :cell-style="{'text-align': 'center','padding-top':'5px','padding-bottom':'5px'}"
        :header-cell-style="{'text-align':'center'}"
        border>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="u_account" label="账号"></el-table-column>
        <el-table-column prop="u_name" label="名称"></el-table-column>
        <el-table-column prop="description" label="状态">
          <template slot-scope="scope">
            {{scope.row.status == 1?'正常':'禁用'}}
          </template>
        </el-table-column>
        <el-table-column prop="last_login_ip" label="上次登录IP" width="170px"></el-table-column>
        <el-table-column prop="last_login_time" label="上次登录时间" width="170px"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="170px"></el-table-column>
        <el-table-column prop="" label="角色名称">
          <template slot-scope="scope">
            {{scope.row.role.role_name}}
          </template>
        </el-table-column>
        <el-table-column prop="description" label="操作" width="180px">
          <template slot-scope="scope">
            <el-button type="warning" @click="openAdmin('edit',scope.row)" size="mini">编辑</el-button>
            <el-button type="danger" @click="deleteUser(scope.row.id)" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="height: 10px"></div>
      <div class="tabListPage">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="pageSizes"
                       :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper"
                       :total="totalCount">
        </el-pagination>
      </div>
    </el-card> -->
    <!-- 模态框 -->
 <!-- </div>
</template>
<script>
  export default {
    data() {
      renturn {
        TableData: []
      }
   },
  //  watch: {
  //    $route() {

  //    }
  //  },
   methods: {
     getList() {
       var _this = this;
       this.$http.get(this.publicurl + '/admin/Type/list', {

       }).then(function (res) {
         _this.TableData = res.data.result.list
       })
     }
   }
 }
</script>
<style>
 
</style>
