<template>
    <div>
        <el-tabs type="border-card" @tab-click="handleClick">
            <!-- 基本信息 -->
            <el-tab-pane label="专业课教师">
                <el-table
                    :data="professionTeacherList"
                    border stripe
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    label="序号"
                    width="70">
                    </el-table-column>
                    <el-table-column
                    prop="jobNumber"
                    label="工号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="phoneNumber"
                    label="电话号码">
                    </el-table-column>
                    <el-table-column
                    prop="courseName"
                    label="所教科目">
                    </el-table-column>
                </el-table>
                <el-pagination
                  @size-change="changeProPage"
                  @current-change="changeProYeMa"
                  :current-page="parseInt(num)"
                  :page-sizes="[1, 2, 3, 4]"
                  :page-size="parseInt(size)"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
            </el-tab-pane>
            <!-- 联系方式 -->
            <el-tab-pane label="副科教师">
                <el-table
                    :data="minorSubjectTeacherList"
                    border stripe
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    label="序号"
                    width="70">
                    </el-table-column>
                    <el-table-column
                    prop="jobNumber"
                    label="工号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="phoneNumber"
                    label="电话号码">
                    </el-table-column>
                    <el-table-column
                    prop="courseName"
                    label="所教科目">
                    </el-table-column>
                </el-table>
                <el-pagination
                  @size-change="changeProPage"
                  @current-change="changeProPage"
                  :current-page="parseInt(num)"
                  :page-sizes="[1, 2, 3, 4]"
                  :page-size="parseInt(size)"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
  data () {
    return {
      professionTeacherList: [],
      minorSubjectTeacherList: [],
      type: '',
      // 当前的页数
      num: '1',
      // 当前每页显示多少条数据
      size: '2',
      total: 0
    }
  },
  mounted () {
    this.type = 'profession'
    this.getPageInfo()
  },
  methods: {
    async getTeacherProfession () {
      const { data: res } = await this.$http.get('teacher?action=queryProfessionTeacherList')
      if (res.meta.status !== 200) return this.$message.error('获取专业老师信息失败')
      this.$message.success('获取专业老师信息成功')
      this.professionTeacherList = res.data
    },
    async getTeacherMinorSubject () {
      const { data: res } = await this.$http.get('teacher?action=queryMinorSubjectTeacherList')
      if (res.meta.status !== 200) return this.$message.error('获取副科老师信息失败')
      this.$message.success('获取副科老师信息成功')
      this.minorSubjectTeacherList = res.data
    },
    handleClick (tab, event) {
      if (tab.index === '0') {
        this.type = 'profession'
        this.getPageInfo()
      }
      if (tab.index === '1') {
        this.type = 'minor'
        this.getPageInfo()
      }
    },
    async getPageInfo () {
      const { data: res } = await this.$http.get(`teacher?action=selectList&type=${this.type}&num=${this.num}&size=${this.size}`)
      if (res.meta.status !== 200) return this.$message.error('获取专业老师信息失败')
      this.$message.success('获取专业老师信息成功')
      if (this.type === 'minor') {
        this.minorSubjectTeacherList = res.data.data
        this.total = res.data.totalNums
      } else {
        this.professionTeacherList = res.data.data
        this.total = res.data.totalNums
      }
    },
    // 专业课 监听pageSize改变的时间
    changeProPage (newSize) {
      this.size = newSize
      this.getPageInfo()
    },
    // 专业课 监听 页面值 发生了改变 触发该函数
    changeProYeMa (newPage) {
      // newPage 是页面值
      this.num = newPage
      this.getPageInfo()
    }
  }
}
</script>

<style lang="less" scoped>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.input-with-select .el-select {
  widows: 130px;
}
.el-pagination {
  margin-top: 20px;
}
</style>
