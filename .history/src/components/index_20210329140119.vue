<template>
  <div>
    <el-card class="box-card">
      <div class="text item">
        <el-table
          @row-click="UserInfo"
          :data="tableData"
          border
          :height="tableHeight"
          style="width: 100%"
          stripe
          :cell-style="{'text-align': 'center','padding-top':'5px','padding-bottom':'5px'}"
          :header-cell-style="{'text-align':'center'}"
        >
          <el-table-column prop="user_name" label="登录名"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="user_money" label="可用资金"></el-table-column>
          <el-table-column prop="kccb" label="开仓成本	"></el-table-column>
          <el-table-column prop="ccsz" label="持仓市值"></el-table-column>
          <el-table-column prop="zzc" label="总资产"></el-table-column>
          <el-table-column prop="khzj" label="客户资金"></el-table-column>
          <el-table-column prop="ljty" label="累计提盈"></el-table-column>
          <el-table-column prop="kqje" label="盈亏">
            <template slot-scope="scope">
              <span v-if="scope.row.kqje<0" style="color: #070">{{scope.row.kqje}}</span>
              <span v-if="scope.row.kqje==0">{{scope.row.kqje}}</span>
              <span v-if="scope.row.kqje>0" style="color: #f00">{{scope.row.kqje}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="yk_bl" label="亏损比">
            <template slot-scope="scope">
              <span v-if="scope.row.kqje<0" style="color: #070">{{scope.row.yk_bl}}%</span>
              <span v-if="scope.row.kqje==0">{{scope.row.yk_bl}}%</span>
              <span v-if="scope.row.kqje>0" style="color: #f00">{{scope.row.yk_bl}}%</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
   
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      Loading: true,
      count: "",
      tableHeight: 500,
      userDada: [
        {
          name: "登录名",
          value: "",
          namer: "姓名",
          valuer: ""
        },
        {
          name: "冻结资金",
          value: "",
          namer: "初始金额",
          valuer: ""
        },
        {
          name: "保证金",
          value: "",
          namer: "系统垫资",
          valuer: ""
        },
        {
          name: "预警线",
          value: "",
          namer: "平仓线",
          valuer: ""
        },
        {
          name: "禁开线",
          value: "",
          namer: "限制交易",
          valuer: ""
        },
        {
          name: "到期日期",
          value: "",
          namer: "状态",
          valuer: ""
        }
      ],
      tableData: [],
      WarningData: [],
      timer: "",
      timerType: true
    };
  },
  mounted: function() {
    //console.log(window.location.pathname)
    var str = sessionStorage["menu"];
    //console.log(str.indexOf(window.location.pathname) != -1 );
    this.getUser();
    this.getWarning();
    clearInterval(this.timer);
    this.setTimedata();
  },
  watch: {
    $route() {
      this.getUser();
      this.getWarning();
      clearInterval(this.timer);
      this.setTimedata();
    }
  },
  methods: {
    setTimedata() {
      var _this = this;
      // 定时获取最新快讯
      _this.timer = setInterval(() => {
        _this.getUser();
      }, 5000);
      //页面销毁时清除定时获取
      this.$once("hook:beforeDestroy", () => {
        clearInterval(_this.timer);
      });
    },
    getUser() {
      if (this.timerType) {
        this.timerType = false;
        var _this = this;
        var str = {
          k: localStorage["stock_token"]
        };
        this.data = this.KEY(str);
        this.$http
          .post("" + "stock/admin/userTable", {
            data: this.data
          })
          .then(function(res) {
            _this.Loading = false;
            _this.count = res.data.data;
            _this.tableData = res.data.data.list;
            _this.timerType = true;
          })
          .catch(error=>{
            _this.$message({
              message: '请求超时,请刷新后重试',
              type: "error"
            });
          })
      } else {
      }
    },
    getWarning() {
      var _this = this;
      var str = {
        k: localStorage["stock_token"]
      };
      this.data = this.KEY(str);
      this.$http
        .post("" + "stock/admin/noticeTable", {
          data: this.data
        })
        .then(function(res) {
          _this.WarningData = res.data.data;
        })
        .catch(function(error) {
          _this.$message.error(error);
        });
    },
    UserInfo(row) {
      if (row.open == 0) {
        var open = "正常";
      } else {
        var open = "限制交易";
      }
      if (row.state == 0) {
        var state = "正常";
      } else {
        var state = "禁用";
      }
      this.userDada = [
        {
          name: "登录名",
          value: row.user_name,
          namer: "姓名",
          valuer: row.name
        },
        {
          name: "冻结资金",
          value: row.frozen_money,
          namer: "初始金额",
          valuer: row.initial_money
        },
        {
          name: "保证金",
          value: row.self_money,
          namer: "系统垫资",
          valuer: row.loan_money
        },
        {
          name: "预警线",
          value: row.warn_money,
          namer: "平仓线",
          valuer: row.pc_money
        },
        {
          name: "禁开线",
          value: row.jk_money,
          namer: "限制交易",
          valuer: open
        },
        {
          name: "到期日期",
          value: row.end_time,
          namer: "状态",
          valuer: state
        }
      ];
    }
  }
};
</script>
<style scoped>
.lable div {
  float: left;
  padding: 10px 30px;
}
.box-title {
  text-align: center;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}
.box {
  display: flex;
}
.box-left {
  flex: 1;
}
</style>
