<template>
  <div class="container">
    <div class="box">
      <img src="../assets/images/timg.jpg" alt="">
    </div>
    <el-form class="loginForm" label-width="100px" :rules="loginFormRules" :model="loginForm" ref="loginFormRefs">
      <el-form-item  label="身份" prop="sfen">
        <el-select v-model="loginForm.sfen" clearable placeholder="请选择" style="width:100%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学号" prop="stuId">
          <el-input v-model="loginForm.stuId"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="yanzhengma">
          <el-input v-model="loginForm.yanzhengma" style="width:100px;"></el-input>
          <div class="yanzhenma">
            <a href="javascript:;" @click="changeImg"><img :src="yanzhengmaPath" alt=""></a>
          </div>
      </el-form-item>
      <el-form-item style="margin-left:105px">
        <el-button type="primary" round @click="login">登陆</el-button>
        <el-button type="warning" round>忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: 'student',
          label: '学生'
        },
        {
          value: 'teacher',
          label: '教职工'
        }
      ],
      value: '',
      loginFormRules: {
        stuId: [
          { required: true, message: '请输入你的学号', trigger: 'blur' },
          { min: 9, max: 9, message: '学号必须是9位，请输入正确的学号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入你的密码', trigger: 'blur' },
          { min: 2, max: 16, message: '密码的长度为2-16之间', trigger: 'blur' }
        ],
        sfen: [
          { required: true, message: '请选择你的身份', trigger: 'blur' }
        ],
        yanzhengma: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      // 登陆表单信息
      loginForm: {
        sfen: '',
        stuId: '',
        passwrod: '',
        yanzhengma: ''
      },
      yanzhengmaPath: 'http://localhost:8888//kaptcha.jpg'
    }
  },
  methods: {
    login () {
      // 如果是 学生身份，就需要进入学生界面，如果是 教师身份，就要进入教师界面
      this.$refs.loginFormRefs.validate(async valid => {
        if (!valid) return this.$message.error('请输入信息')
        if (this.loginForm.sfen === 'student') {
          // console.log(this.loginForm.sfen)
          // 进行学生验证的逻辑
          // 验证码的请求
          // const { data: code } = await this.$http.get(`student?action=login&code=${this.loginForm.yanzhengma}`)
          // if (code.data.meta !== 200) return this.$message.error('验证码输入错误 ')
          const { data: res } = await this.$http.post(`student?action=login&stuId=${this.loginForm.stuId}&password=${this.loginForm.password}&code=${this.loginForm.yanzhengma}`)
          // const { data: res } = await this.$http.post('student/login', {
          //  stuId: this.loginForm.username,
          //  password: this.loginForm.password
          // })
          if (res.meta.status !== 200) return this.$message.error('登陆失败，请重新登陆! ')
          this.$message.success('登陆成功！')
          window.sessionStorage.setItem('token', res.data.token)
          window.sessionStorage.setItem('stuId', res.data.stu_id)
          window.sessionStorage.setItem('hukouId', res.data.hukou_id)
          window.sessionStorage.setItem('schoolId', res.data.school_id)
          window.sessionStorage.setItem('counselor_id', res.data.counselor_id)
          this.$router.push('/student/index')
        } else {
          // console.log(this.loginForm.sfen)
          // 进行老师验证的逻辑
          const { data: res } = await this.$http.post(`teacher?action=login&teacherId=${this.loginForm.stuId}&password=${this.loginForm.password}&code=${this.loginForm.yanzhengma}`)
          if (res.meta.status !== 200) return this.$message.error('教师端登陆失败')
          console.log(res.data)
          this.$message.success('教师端登陆成功')
          window.sessionStorage.setItem('token', res.data.token)
          window.sessionStorage.setItem('teacher_id', res.data.teacher_id)
          window.sessionStorage.setItem('course_id', res.data.course_id)
          this.$router.push('/home')
        }
      })
    },
    changeImg () {
      this.yanzhengmaPath = 'http://localhost:8888//kaptcha.jpg?' + new Date()
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  width: 780px;
  height: 420px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
}

.box {
  position: absolute;
  top: 50%;
  transform: translate(80%, -50%);
  img {
    width: 120px;
    height: 120px;
  }
}
.loginForm {
    width: 400px;
    height: 600px;
    margin-left: 260px;
    padding-top: 70px;
}

.yanzhenma {
  width: 180px;
  height: 40px;
  float: right;
  // background: chartreuse;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
