<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    >
    <el-table-column
      label="ID"
      width="180">
      <template
      >
        <span
        style="margin-left: 10px"
        v-for="item in tableData"
        :key="item.id"
        >{{ item.id }}
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="质量"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="getList()">查看</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          date: '2016-05-02',
          name: '王小虎',
        }
        ],
        tableData: [],
        totalCount: 1,
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        var _this = this
        this.$http.get( this.publicurl+'/admin/Tags/list',{

        })
        .then(function (res) {
          _this.$VerificationLogin(res)
          _this.tableData = res.data.result.list;
          _this.totalCount = res.data.result.total
          console.log(_this.tableData)
          console.log(res)
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }  
    }
  }
</script>
<style scoped>
</style>