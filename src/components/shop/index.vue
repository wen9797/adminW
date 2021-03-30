 <template>
  <div>
    <div class="addBtn">
      <button @click="dialogVisible = true">添加分类</button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="ID" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="分类名称" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.type_name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <img style="margin-left: 10px" :src="scope.row.img" />
        </template>
      </el-table-column>

      <el-table-column label="创建时间" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        style="margin-top: 30px"
      >
      </el-pagination>
    </div>
    <!-- 模态框 -->
    <el-dialog title="添加分类" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item prop="email" label="商品分类">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item
        type="date"
        prop="email"
        label="创建时间"
      >
        <el-input v-model="time"></el-input>
      </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="Addcate"
        >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>


<script>

export default {
  data() {
    return {
      tableData: [],
      totalCount: 0,
      currentPage: 1,
      limit: 2,
      dialogVisible: false,
      name:'',
      time:''
    };
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      var _this = this;

      this.$http
        .get(this.publicurl + "/admin/Type/list", {
          page: _this.currentPage,
          limit: _this.limit,
        })
        .then(function (res) {
          _this.totalCount = res.data.result.total;
          console.log(res);
          _this.tableData = res.data.result.list;
          console.log(res.data.result.list);
          // console.log(_this.totalCount)
        });
    },
    Addcate() {

    },
    getAdd() {
    this.$http
      .post(this.publicurl + "/admin/Type/add", {

      })
      .then(function (res) {
        console.log(res)
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleAdd() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // handleClose(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {});
    //   }
  },
};
</script>
<style scoped>
.addBtn {
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.addBtn button {
  height: 2.2rem;
  border: none;
  width: 6.4rem;
  outline: none;
  background-color: rgb(91, 110, 145);
  margin-bottom: 2rem;
}
.demo-dynamic {
  height: 300px;
  width: 600px;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 200px;
  padding: 30px;
  display: none;
}
</style>