import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './plugins/element.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api/'
// axios.interceptors.requst.use(config => {
//   // 这是请求拦截器
// })

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
