<template>
    <el-container>
            <!-- 头部代码 -->
            <el-header>
                <h3>学生就业管理系统</h3>
                <el-button class="home-container" style="width:70px;height:35px;vertical-align:center" @click="exit">退出</el-button>
            </el-header>
            <!-- 内容代码 -->
            <el-container>
                <!-- 左部区域 -->
                <el-aside width="200px">
                    <el-menu
                        router
                        :default-active="defaultActive"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-menu-item index="charts">
                            <template slot="title">
                                <i class="el-icon-s-data"></i>
                                <span>统计图</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="person_info">
                            <template slot="title">
                                <i class="el-icon-user-solid"></i>
                                <span>个人信息</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="teacher">
                            <template slot="title">
                                <i class="el-icon-shopping-bag-1"></i>
                                <span>教师信息</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="student_base_info">
                            <template slot="title">
                                <i class="el-icon-key"></i>
                                <span>学生信息</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="search">
                            <template slot="title">
                                <i class="el-icon-search"></i>
                                <span>搜索</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="modifyPassword">
                            <template slot="title">
                                <i class="el-icon-key"></i>
                                <span>修改密码</span>
                            </template>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <!-- 内容区域 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: 'charts'
    }
  },
  methods: {
    handleSelect (index) {
      this.defaultActive = index
    },
    exit () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
    height: 100%;
}

.home-container {
    height: 100%;
}
.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-button {
        line-height: 0;
    }
}
.el-aside {
    height: 100%;
    background-color: #545c64;
    overflow: hidden;
}
.el-menu {
    width: 100%;
}
</style>
