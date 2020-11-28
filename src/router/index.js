import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import StudentIndex from '../components/student/StudentIndex.vue'
import PersonInfoHomework from '../components/student/person/PersonInfoHomework.vue'
import PersonInfoForStu from '../components/student/person/PersonInfo.vue'
import SchoolInfo from '../components/student/person/SchoolInfo.vue'
import SchoolStatus from '../components/student/person/SchoolStatus.vue'
import Disposition from '../components/student/person/Disposition.vue'
import ArchivesInfo from '../components/student/ArchivesInfo.vue'
import EmploymentInfo from '../components/student/EmploymentInfo.vue'
import EmploymentSearch from '../components/student/EmploymentSearch.vue'
import KaoyanInfo from '../components/student/KaoyanInfo.vue'
import Modifypsw from '../components/student/Modifypsw.vue'
import Home from '../components/teacher/Home.vue'
import Charts from '../components/teacher/Charts.vue'
import PersonInfo from '../components/teacher/PersonInfo.vue'
import TeacherInfo from '../components/teacher/TeacherInfo.vue'
import Search from '../components/teacher/Search.vue'
import TeacherModifyPsw from '../components/teacher/Modifypsw.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Index
    },
    {
      redirect: '/charts',
      path: '/home',
      component: Home,
      children: [
        { path: '/charts', component: Charts },
        { path: '/person_info', component: PersonInfo },
        { path: '/teacher', component: TeacherInfo },
        { path: '/search', component: Search },
        { path: '/modifyPassword', component: TeacherModifyPsw }
      ]
    },
    {
      redirect: '/student/person_info',
      path: '/student/index',
      component: StudentIndex,
      children: [
        { path: '/student/person_info_homework', component: PersonInfoHomework },
        { path: '/student/person_info', component: PersonInfoForStu },
        { path: '/student/person_info_school', component: SchoolInfo },
        { path: '/student/person_info_school_roll', component: SchoolStatus },
        { path: '/student/person_info_disciplinary', component: Disposition },
        { path: '/student/archives_info', component: ArchivesInfo },
        { path: '/student/employment_info', component: EmploymentInfo },
        { path: '/student/employment_search', component: EmploymentSearch },
        { path: '/student/kaoyanInfo', component: KaoyanInfo },
        { path: '/student/modifyPassword', component: Modifypsw }
      ]
    }
  ]
})

// to 表示即将要进入的路由对象
// from 表示即将要离开的路由对象
// next 放行
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  return next()
})

export default router
