<template>
    <div>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">当前位置</el-breadcrumb-item>
            <el-breadcrumb-item><a href="javascript:;">处分信息</a></el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 表单域 -->
      <el-card>
          <el-form label-width="150px" v-model="personInfo">
              <div class="baseInfo">
                  <h3>档案关系</h3>
                  <el-form-item label="代理类型">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="有无组织关系">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="人才代理标志">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="灵活合同标志">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="灵活合同单位名称">
                      <el-input></el-input>
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
    }
  }
}
</script>

<style lang="less" scoped>

</style>
