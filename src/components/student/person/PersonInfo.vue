<template>
    <div>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">当前位置</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">家庭信息</a></el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 表单域 -->
      <el-card>
          <el-form label-width="100px" v-model="personInfo">
              <div class="baseInfo">
                  <h3>基本信息</h3>
                  <el-form-item label="姓名">
                      <el-input v-model="personInfo.baseInfo.name" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="学号">
                      <el-input v-model="personInfo.baseInfo.stu_id" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-radio-group v-model="personInfo.baseInfo.gender" :disabled="disabled">
                        <el-radio-button label="男" name="man"></el-radio-button>
                        <el-radio-button label="女" name="woman"></el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="民族">
                      <el-input v-model="personInfo.baseInfo.nation" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="出生日期">
                      <el-input v-model="personInfo.baseInfo.birthday" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="政治面貌">
                    <el-select v-model="personInfo.baseInfo.political_status" placeholder="请选择" :disabled="disabled">
                        <el-option
                        v-for="item in political_landscape"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="身份证号" :disabled="disabled">
                      <el-input v-model="personInfo.baseInfo.id_number" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="独生子女" :disabled="disabled">
                      <el-select v-model="personInfo.baseInfo.only_child" placeholder="请选择" :disabled="disabled">
                        <el-option
                        v-for="item in isOnly"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                  </el-form-item>
              </div>
              <div class="linkway">
                  <h3>联系方式</h3>
                  <el-form-item label="手机号码">
                    <el-input v-model="personInfo.baseInfo.phone_number" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="电子邮箱">
                    <el-input v-model="personInfo.baseInfo.email" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="QQ号码">
                    <el-input v-model="personInfo.baseInfo.qq_number" :disabled="disabled"></el-input>
                  </el-form-item>
              </div>
              <div class="fudaoyuan">
                  <h3>辅导员信息</h3>
                  <el-form-item label="姓名">
                    <el-input v-model="personInfo.counselorInfo.name" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="电话号码">
                    <el-input v-model="personInfo.counselorInfo.phone_number" :disabled="disabled"></el-input>
                  </el-form-item>
              </div>
              <el-form-item style="text-align:center;margin-top:50px">
                <el-button type="primary" icon="el-icon-edit" @click="edit">编辑</el-button>
                <el-button type="warning" icon="el-icon-warning">保存</el-button>
              </el-form-item>
          </el-form>
      </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      political_landscape: [
        {
          value: '共青党员',
          label: '共青党员'
        },
        {
          value: '中共预备党员',
          label: '中共预备党员'
        },
        {
          value: '共青团员',
          leble: '共青团员'
        },
        {
          value: '群众',
          label: '群众'
        },
        {
          value: '无党派人士',
          label: '无党派人士'
        }
      ],
      isOnly: [
        {
          value: '0',
          label: '否'
        },
        {
          value: '1',
          label: '是'
        }
      ],
      personInfo: {
        baseInfo: {
          birthday: '',
          name: '',
          stu_id: '',
          gender: '',
          nation: '',
          political_status: '',
          qq_number: '',
          email: '',
          phone_number: '',
          id_number: ''
        },
        counselorInfo: {
          name: '',
          counselor_id: '',
          phone_number: ''
        }
      },
      stuId: '',
      disabled: true,
      counselor_id: ''
    }
  },
  mounted () {
    this.getStudentInfo()
    this.getCounselorInfo()
  },
  methods: {
    async getStudentInfo () {
      this.stuId = window.sessionStorage.getItem('stuId')
      const { data: res } = await this.$http.post(`student?action=queryStudentInfoByStuId&stuId=${this.stuId}`)
      if (res.meta.status !== 200) return this.$message.error('获取学生信息失败')
      // console.log(res.data)
      this.personInfo.baseInfo = res.data
      this.$message.success('获取学生信息成功')
    },
    async getCounselorInfo () {
      this.counselor_id = window.sessionStorage.getItem('counselor_id')
      const { data: res } = await this.$http.post(`student?action=queryCounselorInfoById&counselorId=${this.counselor_id}`)
      if (res.meta.status !== 200) return this.$message.error('获取辅导员信息失败')
      this.personInfo.counselorInfo = res.data
      this.$message.success('获取辅导员信息成功')
    },
    async edit () {
      const promiseResult = await this.$confirm('此操作将进行编辑页面信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(error => error)
      if (promiseResult !== 'confirm') return this.$message.info('你已经取消了该操作!!')
      this.disabled = false
    }
  }
}
</script>

<style lang="less" scoped>

</style>
