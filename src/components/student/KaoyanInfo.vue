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
              <div class="">
                  <h3>基本信息</h3>
                  <el-form-item label="专业对口">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="升学院校">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="报道证编号">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="升学院校邮编 ">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="升学档案转寄">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="录取院校所在地">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="升学档案接收人 ">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="接收人联系电话">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="是否全日制研究生">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="是否免推研究生">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="定向或委培单位">
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
