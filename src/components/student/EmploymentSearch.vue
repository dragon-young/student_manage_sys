<template>
    <div>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">当前位置</el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:;">就业调查</a></el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 表单域 -->
      <el-card>
          <el-form label-width="150px" v-model="employementSearch" style="width:400px;margin: 10px auto;">
              <div class="">
                  <h3 style="text-align:center">基本调查</h3>
                  <el-form-item label="期望工作地域">
                      <el-input v-model="employementSearch.area" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="期望工作地点">
                      <el-input v-model="employementSearch.address" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="期望单位性质">
                      <el-input v-model="employementSearch.xingzhi" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="毕业期望薪酬 ">
                      <el-input v-model="employementSearch.salary" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="是否准备升学">
                      <el-input v-model="employementSearch.up" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="工作与专业相关度">
                      <el-input v-model="employementSearch.concat" :disabled="disabled"></el-input>
                  </el-form-item>
                  <el-form-item label="备注说明">
                      <el-input v-model="employementSearch.info" :disabled="disabled"></el-input>
                  </el-form-item>
              </div>
              <el-form-item style="text-align:center">
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
      employementSearch: {
        area: '四川',
        address: '成都',
        xingzhi: '计算机',
        salary: '10000',
        up: '否',
        concat: '无',
        info: '无'
      },
      disabled: true
    }
  },
  methods: {
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
      const promiseResult = await this.$confirm('此操作将进行保存该页面信息, 是否继续?', '提示', {
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
