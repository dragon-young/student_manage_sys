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
                  <h3>单位信息</h3>
                  <el-form-item label="单位名称">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="单位组织机构">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="单位性质">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="单位行业 ">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="单位所在地区">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="单位邮编">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="单位具体地址 ">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="单位联系人">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="联系人电话号码">
                      <el-input></el-input>
                  </el-form-item>
              </div>
              <div class="baodao">
                  <h3>报到证档案信息</h3>
                  <el-form-item label="派遣时间">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="派遣报到证号">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="报到证件签发类别">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="签往单位所在地">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="报到证迁往单位名称">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="档案转寄单位邮编">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="档案转寄单位">
                      <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="档案转寄地址">
                      <el-input></el-input>
                  </el-form-item>
              </div>
              <div class="other_info">
                <h3>其他信息</h3>
                <el-form-item label="录入日期">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="毕业去向">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="特殊说明">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="职业类别">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="就业满意度">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="应征义务兵">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="是否就业标志">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="扩展向4代码">
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
