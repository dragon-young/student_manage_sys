<template>
    <div>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">当前位置</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">学校信息</a></el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 表单域 -->
      <el-card>
          <el-form label-width="150px" v-model="school_status">
              <div class="baseInfo">
                  <h3>基本信息</h3>
                  <el-form-item label="考生号码">
                      <el-input v-model="school_status.base_info.student_status_id" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="原考生号">
                      <el-input v-model="school_status.base_info.student_status_id_bofore" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="入校时间">
                      <el-input v-model="school_status.base_info.enrollment_time" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="毕业时间">
                      <el-input v-model="school_status.base_info.graduation_time" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="困难生类别">
                      <el-input v-model="school_status.base_info.difficult_students_category" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="生源所在地">
                      <el-input v-model="school_status.base_info.birth_place" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="学籍是否变动">
                      <el-input v-model="school_status.base_info.w_account_transfer" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="留级退学标志">
                      <el-input v-model="school_status.base_info.w_drop_out" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="在校任职情况">
                      <el-input v-model="school_status.base_info.situation_employed" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="综合评测情况">
                      <el-input v-model="school_status.base_info.situation_comprehensive_evaluation" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="档案是否转入学校">
                      <el-input v-model="school_status.base_info.w_file_transfer" :disabled="disabled"></el-input>
                  </el-form-item>
                   <el-form-item label="户口是否转入学校">
                      <el-input v-model="school_status.base_info.w_account_transfer" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="入学前档案所在单位">
                      <el-input v-model="school_status.base_info.before_file_unit" :disabled="disabled"></el-input>
                  </el-form-item>
              </div>
              <div class="professionalInfo">
                  <h3>专业信息</h3>
                   <el-form-item label="学历">
                      <el-input v-model="school_status.specialty_info.education" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="学制">
                      <el-input v-model="school_status.specialty_info.schooling_length" :disabled="disabled"></el-input>
                  </el-form-item>
                   <el-form-item label="学科门类">
                      <el-input v-model="school_status.specialty_info.subject_category" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="专业名称">
                      <el-input v-model="school_status.specialty_info.professional_name" :disabled="disabled"></el-input>
                  </el-form-item>
                   <el-form-item label="所在院校">
                      <el-input v-model="school_status.specialty_info.department" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="所在班级">
                      <el-input v-model="school_status.specialty_info.in_class" :disabled="disabled"></el-input>
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
      stuId: '',
      school_status: {
        base_info: {
          student_status_id: '',
          student_status_id_bofore: '',
          enrollment_time: '',
          graduation_time: '',
          difficult_students_category: '',
          birth_place: '',
          w_drop_out: '',
          w_account_transfer: '',
          situation_comprehensive_evaluation: '',
          situation_employed: '',
          w_file_transfer: '',
          before_file_unit: ''
        },
        specialty_info: {
          education: '',
          schooling_length: '',
          subject_category: '',
          professional_name: '',
          department: '',
          in_class: '',
          training_method: '',
          w_normal_school: '',
          normal_stu_category: '',
          major_foreign_languages: ''
        }
      },
      specialty_id: '',
      disabled: true
    }
  },
  mounted () {
    this.getSchoolStatusInfo()
  },
  methods: {
    async getSchoolStatusInfo () {
      this.stuId = window.sessionStorage.getItem('stuId')
      const { data: res } = await this.$http.post(`student?action=queryStudentStatusInfoById&stuId=${this.stuId}`)
      if (res.meta.status !== 200) return this.$message.error('获取学籍信息失败')
      console.log(res.data)
      this.school_status.base_info = res.data
      this.specialty_id = res.data.specialty_id
      this.$message.success('获取学籍成功！！')
      this.getSpecialtyInfo()
    },
    async getSpecialtyInfo () {
      const { data: res } = await this.$http.post(`student?action=querySpecialtyById&specialtyId=${this.specialty_id}`)
      if (res.meta.status !== 200) return this.$message.error('获取专业信息失败')
      this.school_status.specialty_info = res.data
      this.$message.success('获取专业信息成功！！')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
