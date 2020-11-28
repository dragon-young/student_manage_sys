<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">当前位置</el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:;">修改密码</a></el-breadcrumb-item>
      </el-breadcrumb>
      <el-card>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" style="width:400px;margin:200px auto">
          <el-form-item label="原密码" prop="beforePass">
            <el-input type="password" v-model="ruleForm.beforePass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="margin-left:100px;" @click="editPassword">提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>
<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        beforePass: '',
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      stuId: ''
    }
  },
  methods: {
    async editPassword () {
      const promiseResult = await this.$confirm('此操作将进行对密码进行修改, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(error => error)
      if (promiseResult !== 'confirm') return this.$message.info('你已经取消了该操作!!')
      this.stuId = window.sessionStorage.getItem('stuId')
      const { data: res } = await this.$http.post(`student?action=modifyPassword&stuId=${this.stuId}&oldPassword=${this.ruleForm.beforePass}&newPassword=${this.ruleForm.checkPass}`)
      if (res.meta.status === 205) return this.$message.error('修改密码失败，你的原始密码输入错误！！')
      if (res.meta.status !== 200) return this.$message.error('修改密码失败')
      this.$message.success('修改密码成功')
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
