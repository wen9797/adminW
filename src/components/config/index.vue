<template>
  <el-card>
    <el-tabs type="border-card">
      <el-tab-pane label="系统配置">
        <div class="text item">
          <el-row class="demo-autocomplete">
            <el-col :span="24">
              <div class="sub-title">短信平台选择</div>
              <el-select v-model.trim="value" placeholder="请选择" size="small" style="width: 300px ">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">版本号</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.stock_edition"
                        clearable></el-input>
              <div class="sub-msg">APP版本号</div>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">默认密码</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.default_pas"
                        clearable></el-input>
              <div class="sub-msg">新增用户默认密码</div>
            </el-col>
            <!--<el-col :span="24">
              <div class="sub-title">买入延迟成交时间(秒)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.buy_delay" clearable></el-input>
              <div class="sub-msg"></div>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">卖出延迟成交时间(秒)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sell_delay" clearable></el-input>
              <div class="sub-msg"></div>
            </el-col>-->
            <el-col :span="24">
              <div class="sub-title">亏损预警(百分比)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.warning_pre"
                        clearable></el-input>
              <div class="sub-msg">总亏损达到用户自有资金(不包括系统垫资)的这个比例就会触发预警</div>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">亏损平仓(百分比)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.pc_pre"
                        clearable></el-input>
              <div class="sub-msg">总亏损达到用户自有资金(不包括系统垫资)的这个比例就会触发平仓</div>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">禁开线(百分比)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.forbid_pre"
                        clearable></el-input>
              <div class="sub-msg">亏损比超过这个百分比，禁止买入任何股票</div>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">佣金设置(千分比)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sx_qian"
                        clearable></el-input>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">每笔最低费用(元)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sx_min"
                        clearable></el-input>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">印花税(千分比)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.yinhua_qian"
                        clearable></el-input>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">过户费(千分比)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.ghf_qian"
                        clearable></el-input>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">最低过户费(元)</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.ghf_min"
                        clearable></el-input>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="创业板配置">
        <div class="text item">
          <el-col :span="24">
            <div class="sub-title">盘后定价交易</div>
            <div style="margin: 10px 0">
              <el-radio v-model.trim="configList.closing_trade_switch" label="1">开启</el-radio>
              <el-radio v-model.trim="configList.closing_trade_switch" label="0">关闭</el-radio>
            </div>
            <div class="sub-msg"></div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">开启创业板</div>
            <div style="margin: 10px 0">
              <el-radio v-model.trim="configList.cyb_switch" label="1">开启</el-radio>
              <el-radio v-model.trim="configList.cyb_switch" label="0">关闭</el-radio>
            </div>
            <div class="sub-msg">是否允许交易创业板</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">最低股票交易价格</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.cyb_forbid_min"
                      clearable></el-input>
            <div class="sub-msg">低于该价格股票禁止买入</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">最低保证金</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.cyb_minimum"
                      clearable></el-input>
            <div class="sub-msg">0为不限制</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">创业板持仓仓位限制百分比</div>
            <el-input class="sub-inp" type="number" size="small" placeholder="请输入内容" v-model.trim="configList.cyb_cc_pre"
                      clearable></el-input>
            <div class="sub-msg">限制1%-100%</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">跌停股票</div>
            <div style="margin: 10px 0">
              <el-radio v-model.trim="configList.cyb_down_trade_switch" label="1">开启</el-radio>
              <el-radio v-model.trim="configList.cyb_down_trade_switch" label="0">关闭</el-radio>
            </div>
            <div class="sub-msg">当前跌停股票只允许买入</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">涨停股票</div>
            <div style="margin: 10px 0">
              <el-radio v-model.trim="configList.cyb_up_trade_switch" label="1">开启</el-radio>
              <el-radio v-model.trim="configList.cyb_up_trade_switch" label="0">关闭</el-radio>
            </div>
            <div class="sub-msg">当前涨停股票只允许卖出</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">创业板涨幅限制(百分比)</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.cyb_up_pre"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">创业板跌幅限制(百分比)</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.cyb_down_pre"
                      clearable></el-input>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="风控管理">
        <div class="text item">
          <el-col :span="24">
            <div class="sub-title">最低股票交易价格</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.forbid_min"
                      clearable></el-input>
            <div class="sub-msg">低于该价格股票禁止买入</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">亏损企业股票</div>
            <div style="margin: 10px 0">
              <el-radio v-model.trim="configList.kuishun_stock_sell_only" label="1">开启</el-radio>
              <el-radio v-model.trim="configList.kuishun_stock_sell_only" label="0">关闭</el-radio>
            </div>
            <div class="sub-msg">股票名称中带有S或者带有ST的股票只允许卖出</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">跌停股票</div>
            <div style="margin: 10px 0">
              <el-radio v-model.trim="configList.down_trade_switch" label="1">开启</el-radio>
              <el-radio v-model.trim="configList.down_trade_switch" label="0">关闭</el-radio>
            </div>
            <div class="sub-msg">当前跌停股票只允许买入</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">涨停股票</div>
            <div style="margin: 10px 0">
              <el-radio v-model.trim="configList.up_trade_switch" label="1">开启</el-radio>
              <el-radio v-model.trim="configList.up_trade_switch" label="0">关闭</el-radio>
            </div>
            <div class="sub-msg">当前涨停股票只允许卖出</div>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">跌停幅度(百分比)</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.down_pre"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">涨停幅度(百分比)</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.up_pre"
                      clearable></el-input>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="飞鸽短信配置">
        <div class="text item">
          <el-col :span="24">
            <div class="sub-title">飞鸽短信url</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sms_url"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">飞鸽短信账号</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sms_account"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">飞鸽短信密码</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sms_pwd"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">飞鸽短信singId</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sms_signId"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">短信预警提示内容</div>
            <el-input class="sub-inp" style="max-width: 500px" size="small" placeholder="请输入内容"
                      v-model.trim="configList.warn_content" clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">短信平仓提示内容</div>
            <el-input class="sub-inp" style="max-width: 500px" size="small" placeholder="请输入内容"
                      v-model.trim="configList.pc_content" clearable></el-input>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="华信短信配置">
        <div class="text item">
          <el-col :span="24">
            <div class="sub-title">华信短信url</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sms_2_url"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">华信短信账号</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sms_2_account"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">华信短信密码</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.sms_2_pwd"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">短信预警提示内容</div>
            <el-input class="sub-inp" style="max-width: 500px" size="small" placeholder="请输入内容"
                      v-model.trim="configList.warn_2_content" clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">短信平仓提示内容</div>
            <el-input class="sub-inp" style="max-width: 500px" size="small" placeholder="请输入内容"
                      v-model.trim="configList.pc_2_content" clearable></el-input>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="漫道短信配置">
        <div class="text item">
          <el-col :span="24">
            <div class="sub-title">漫道短信url</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.md_url"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">漫道短信序列号</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.md_sn"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">漫道短信密码</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.md_pwd"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">短信预警提示内容</div>
            <el-input class="sub-inp" style="max-width: 500px" size="small" placeholder="请输入内容"
                      v-model.trim="configList.md_warn" clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">短信平仓提示内容</div>
            <el-input class="sub-inp" style="max-width: 500px" size="small" placeholder="请输入内容"
                      v-model.trim="configList.md_pc" clearable></el-input>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="集时通短信配置">
        <div class="text item">
          <el-col :span="24">
            <div class="sub-title">集时通短信接口</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.jst_url"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">集时通短信账号</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.jst_login_name"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">集时通短信密码</div>
            <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.jst_login_pwd"
                      clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">短信预警提示内容</div>
            <el-input class="sub-inp" style="max-width: 500px" size="small" placeholder="请输入内容"
                      v-model.trim="configList.jst_warn" clearable></el-input>
          </el-col>
          <el-col :span="24">
            <div class="sub-title">短信平仓提示内容</div>
            <el-input class="sub-inp" style="max-width: 500px" size="small" placeholder="请输入内容"
                      v-model.trim="configList.jst_pc" clearable></el-input>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="除权除息接口配置">
        <div class="text item">
          <div class="text item">
            <el-col :span="24">
              <div class="sub-title">接口地址</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.cqcx_url"
                        clearable></el-input>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">单条数据接口路径</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.cqcx_path_single"
                        clearable></el-input>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">接口路径</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.cqcx_path"
                        clearable></el-input>
            </el-col>
            <el-col :span="24">
              <div class="sub-title">接口code</div>
              <el-input class="sub-inp" size="small" placeholder="请输入内容" v-model.trim="configList.cqcx_code"
                        clearable></el-input>
            </el-col>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div style="height: 15px"></div>
    <el-button v-loading='loading' @click="configSubmit()">确定</el-button>
  </el-card>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        loading: false,
        configList: [{}],
        options: [{
          value: '0',
          label: '飞鸽'
        }, {
          value: '1',
          label: '华信'
        }, {
          value: '2',
          label: '漫道'
        }, {
          value: '3',
          label: '集时通'
        }],
        value: ''
      }
    },
    mounted: function () {
      this.getConfig()
    },
    watch: {
      $route() {
        this.getConfig()
      }
    },
    methods: {
      configSubmit() {
        this.loading = true
        this.configList.send_way = this.value
        var _this = this;
        this.$http.post('' + 'stock/admin/configsEdit', {
          'k': localStorage['stock_token'],
          'config': this.configList
        })
          .then(function (res) {
            _this.loading = false
            _this.$VerificationLogin(res)
            if (res.data.code != 200) {
              _this.$message({
                message: res.data.msg,
                type: 'warning'
              });
            } else {
              _this.$message({
                message: res.data.msg,
                type: 'success'
              });
            }
          })
      },
      getConfig() {
        var _this = this;
        var str = {
          'k': localStorage['stock_token'],
        };
        this.data = this.KEY(str);
        this.$http.post('' + 'stock/admin/configs', {
          data: this.data
        })
          .then(function (res) {
            if (res.data.code != 200) {
              _this.$message({
                message: res.data.msg,
                type: 'warning'
              });
            } else {
              _this.configList = res.data.data;
              _this.value = _this.options[_this.configList.send_way].value
            }
          })
      },
    }
  }
</script>

<style scoped>
  .sub-title {
    font-weight: bold;
    margin: 10px 0;
    font-size: 15px;
  }

  .sub-inp {
    max-width: 300px;
  }

  .sub-msg {
    font-size: 12px;
    color: #999999;
  }
</style>
