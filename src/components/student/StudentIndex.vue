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
                    <el-submenu index="person_info">
                        <template slot="title">
                            <i class="el-icon-lock"></i>
                            <span>个人信息</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="person_info">个人信息</el-menu-item>
                            <el-menu-item index="person_info_homework">家庭信息</el-menu-item>
                            <el-menu-item index="person_info_school">学校信息</el-menu-item>
                            <el-menu-item index="person_info_school_roll">学籍信息</el-menu-item>
                            <el-menu-item index="person_info_disciplinary">处分信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="archives_info">
                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>档案信息</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="employment_info">
                        <template slot="title">
                            <i class="el-icon-shopping-bag-1"></i>
                            <span>就业信息</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="employment_search">
                        <template slot="title">
                            <i class="el-icon-shopping-bag-1"></i>
                            <span>就业调查</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="kaoyanInfo">
                        <template slot="title">
                            <i class="el-icon-shopping-bag-1"></i>
                            <span>考研信息</span>
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
      // 默认的激活颜色
      defaultActive: 'charts'
    }
  },
  methods: {
    handleSelect (key) {
      this.defaultActive = key
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
.el-submenu .el-menu-item {
    padding-left: 75px !important;
}
</style>
