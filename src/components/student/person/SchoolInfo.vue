<template>
    <div>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">当前位置</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">学校信息</a></el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 表单域 -->
      <el-card>
          <el-form label-width="150px" v-model="school_info">
              <div class="baseInfo">
                  <h3>基本信息</h3>
                  <el-form-item label="所在校区">
                      <el-input v-model="school_info.campus" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="分校名称">
                      <el-input v-model="school_info.branch_school_name" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="院校名称">
                      <el-input v-model="school_info.school_name" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="院校代码">
                      <el-input v-model="school_info.school_code" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="院校所在省份代码">
                      <el-input v-model="school_info.province_code" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="院校所在地代码">
                      <el-input v-model="school_info.location_code" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="院校隶属部门代码">
                      <el-input v-model="school_info.department_code" :disabled="disabled"></el-input>
                  </el-form-item>
              </div>
              <el-button type="primary" icon="el-icon-edit">编辑</el-button>
              <el-button type="warning" icon="el-icon-warning">保存</el-button>
          </el-form>
      </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      schoolId: '',
      school_info: {
        campus: '',
        school_name: '',
        province_code: '',
        branch_school_name: '',
        school_code: '',
        department_code: ''
      },
      disabled: true
    }
  },
  mounted () {
    this.getSchoolInfo()
  },
  methods: {
    async getSchoolInfo () {
      this.schoolId = window.sessionStorage.getItem('schoolId')
      const { data: res } = await this.$http.post(`student?action=querySchoolInfoById&schoolId=${this.schoolId}`)
      if (res.meta.status !== 200) return this.$message.error('获取学校信息失败')
      // console.log(res.data)
      this.school_info = res.data
      this.$message.success('获取学校信息成功')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
