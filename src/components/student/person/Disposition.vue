<template>
    <div>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">当前位置</el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:;">处分信息</a></el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 表单域 -->
      <el-card>
          <el-form label-width="150px" v-model="punishInfo">
              <div class="baseInfo">
                  <h3>基本信息</h3>
                  <el-form-item label="处分等级">
                      <el-input v-model="punishInfo.level" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="处分名称">
                      <el-input v-model="punishInfo.name" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="处分日期">
                      <el-col :span="11">
                        <el-date-picker :disabled="disabled" type="date" v-model="punishInfo.date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                      </el-col>
                  </el-form-item>
                  <el-form-item label="经办人姓名">
                      <el-input :disabled="disabled" v-model="punishInfo.manager_name"></el-input>
                  </el-form-item>
                  <el-form-item label="处分理由">
                      <el-input :disabled="disabled" type="textarea" v-model="punishInfo.reasons"></el-input>
                  </el-form-item>
              </div>
              <el-form-item style="text-algin:center">
                <el-button type="primary" icon="el-icon-edit" @click="edit">编辑</el-button>
                <el-button type="warning" icon="el-icon-warning" @click="save">保存</el-button>
              </el-form-item>
          </el-form>
      </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      stuId: '',
      punishInfo: {
        level: '',
        name: '',
        date: '',
        manager_name: '',
        reasons: ''
      },
      disabled: ''
    }
  },
  mounted () {
    this.getPunishInfo()
  },
  methods: {
    async getPunishInfo () {
      this.stuId = window.sessionStorage.getItem('stuId')
      const { data: res } = await this.$http.post(`student?action=queryPunishInfoById&stuId=${this.stuId}`)
      if (res.meta.status !== 200) return this.$message.error('获取处分信息失败')
      this.punishInfo = res.data
      this.$message.success('获取处分信息成功')
    },
    async edit () {
      const promiseResult = await this.$confirm('此操作将进行编辑页面信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(error => error)
      if (promiseResult !== 'confirm') return this.$message.info('你已经取消了该操作!!')
      this.disabled = false
    },
    async save () {
      const promiseResult = await this.$confirm('此操作将进行编辑页面信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(error => error)
      if (promiseResult !== 'confirm') return this.$message.info('你已经取消了该操作!!')
      this.$message.success('保存数据成功')
      this.disabled = true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
