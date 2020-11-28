<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">当前位置</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">家庭信息</a></el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-form v-model="homeInfo" style="width:100%;" class="clearfix">
                <!-- 父母联系方式 -->
                <h3>父母联系方式</h3>
                <div class="clearfix">
                  <el-form-item label="关系" class="parentLink">
                      <el-select :disabled="disabled" v-model="homeInfo.parentLink.relationship" clearable placeholder="请选择" style="width:300px">
                        <el-option
                            v-for="item in relationship"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="姓名" class="parentLink">
                      <el-input v-model="homeInfo.parentLink.name" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="电话号码" class="parentLink">
                      <el-input v-model="homeInfo.parentLink.phone_number" :disabled="disabled"></el-input>
                  </el-form-item>
                </div>
                <!-- 户口信息 -->
                <div style="margin-top:20px">
                  <h3>户口信息</h3>
                </div>
                <div class="clearfix">
                  <el-form-item label="邮政编码" class="hukouInfo">
                      <el-input v-model="homeInfo.hukouInfo.postal_code" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item  label="贫困等级" prop="poorLevel" class="parentLink">
                      <el-select :disabled="disabled" v-model="homeInfo.hukouInfo.poverty_level" clearable placeholder="请选择" style="width:300px">
                      <el-option
                          v-for="item in poorLevel"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                      >
                      </el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="代码编号" class="parentLink">
                      <el-input v-model="homeInfo.hukouInfo.code_number" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="派出所地址" class="parentLink">
                      <el-input v-model="homeInfo.hukouInfo.police_station_address" :disabled="disabled"></el-input>
                  </el-form-item>
                    <el-alert
                      title="家庭地址"
                      type="warning"
                      show-icon>
                    </el-alert>
                  <el-form-item label="家庭地址" class="home_address">
                      <el-input style="width:90px" v-model="province" :disabled="disabled"></el-input>省
                      <el-input style="width:90px" v-model="city" :disabled="disabled"></el-input>市
                      <el-input style="width:90px" v-model="districtOrCounty" :disabled="disabled"></el-input>区/县
                      <el-input style="width:150px" v-model="street" :disabled="disabled"></el-input>街道
                  </el-form-item>
                </div>
                <div class="info_edit clearfix">
                  <el-form-item style="text-align:center">
                    <el-button icon="el-icon-edit" type="primary" @click="editInfo">编辑</el-button>
                    <el-button icon="el-icon-warning" type="warning" @click="saveInfo">保存</el-button>
                  </el-form-item>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      relationship: [
        {
          value: 'fz',
          label: '父子'
        },
        {
          value: 'mn',
          label: '母女'
        },
        {
          value: 'fn',
          label: '父女'
        },
        {
          value: 'mz',
          label: '母子'
        }
      ],
      poorLevel: [
        {
          value: 'normal',
          label: '一般'
        },
        {
          value: 'special',
          label: '特困'
        }
      ],
      homeInfo: {
        parentLink: {
          contact_id: '',
          relationship: '',
          name: '',
          phone_number: ''
        },
        hukouInfo: {
          code_number: '',
          family_address: '',
          police_station_address: '',
          postal_code: '',
          poverty_level: ''
        }
      },
      hukouId: '',
      stuId: '',
      disabled: true,
      province: '',
      city: '',
      districtOrCounty: '',
      street: ''
    }
  },
  mounted () {
    this.getParentContactInfo()
    this.getHukouInfo()
  },
  methods: {
    async getHukouInfo () {
      this.hukouId = window.sessionStorage.getItem('hukouId')
      const { data: res } = await this.$http.post(`student?action=queryHukouInfo&hukouId=${this.hukouId}`)
      if (res.meta.status !== 200) return this.$message.error('获取用户户口信息失败')
      this.$message.success('获取用户户口信息成功')
      this.homeInfo.hukouInfo = res.data
      const famliyArray = this.homeInfo.hukouInfo.family_address.split(',')
      this.province = famliyArray[0]
      this.city = famliyArray[1]
      this.districtOrCounty = famliyArray[2]
      this.street = famliyArray[3]
      console.log(famliyArray)
      // console.log(res.data)
    },
    async getParentContactInfo () {
      this.stuId = window.sessionStorage.getItem('stuId')
      const { data: res } = await this.$http.post(`student?action=queryParentContactInfo&stuId=${this.stuId}`)
      if (res.meta.status !== 200) return this.$message.error('获取父母联系方式失败')
      this.$message.success('获取父母联系方式成功')
      this.homeInfo.parentLink = res.data
    },
    async editInfo () {
      const promiseResult = await this.$confirm('此操作将进行编辑页面信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(error => error)
      if (promiseResult !== 'confirm') return this.$message.info('你已经取消了该操作!!')
      this.disabled = false
    },
    async saveInfo () {
      const { data: res } = await this.$http.get(`student?action=updateHukouInfo&hukouId=${this.hukouId}&codeNumber=${this.homeInfo.hukouInfo.code_number}&familyAddress=${this.familyAddress}
      &policeStationAddress=${this.homeInfo.hukouInfo.police_station_address}&postalCode=${this.homeInfo.hukouInfo.postal_code}&povertyLevel=${this.homeInfo.hukouInfo.poverty_level}`)
      if (res.meta.status !== 200) return this.$message.error('保存户口失败')
      this.$message.success('保存户口成功')
      this.getHukouInfo()
      // console.log(res.data)
      this.disabled = true
    }
  },
  computed: {
    familyAddress () {
      return this.province + ',' + this.city + ',' + this.districtOrCounty + ',' + this.street
    }
  }
}
</script>

<style lang="less" scoped>
.inputWidth {
    width: 200px;
}
.el-input {
    width: 300px;
}

.clearfix:after,.clearfix:before{
  content: "";
  display: table;
}
.clearfix:after{
    clear: both;
}
.clearfix{
    *zoom: 1;
}

.parentLink {
  float: left;
  width: 400px;
  height: 40px;
}

.hukouInfo {
  width: 400px;
  height: 40px;
  float: left;
}

.home_address {
  width: 1000px;
  height: 40px;
  float: left;
}

.el-card .el-alert {
    margin: 8px 0 15px 0;
}

</style>
