<template>
  <div class="container">
    <el-form class="loginForm" label-width="100px">
      <el-form-item  label="身份">
        <el-select v-model="value" clearable placeholder="请选择" style="width:100%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="账号">
          <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码">
          <el-input></el-input>
      </el-form-item>
      <el-form-item label="验证码">
          <el-input></el-input>
      </el-form-item>

      <el-button type="primary" round>登陆</el-button>
      <el-button type="primary" round>注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '学生'
        },
        {
          value: '选项2',
          label: '教职工'
        }
      ],
      value: ''
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
.loginForm {
    width: 400px;
    height: 600px;
    margin: 50px auto;
}

</style>
