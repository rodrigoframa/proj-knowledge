import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJvZHJpZ28gTWFpYSIsImVtYWlsIjoicm9kcmlnb2ZyYW1hQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NDI0MTQwMjYsImV4cCI6MTU0MjY3MzIyNn0.f3_ykmkeDgNtrWhzKIXFy0hjxUvoTRgXYu5XAlPzyOk'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')