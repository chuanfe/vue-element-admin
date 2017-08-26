import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Login
    }
  ]
})
