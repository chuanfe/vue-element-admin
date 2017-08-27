import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/layout/index'
import Login from '@/views/login/index'

import Meeting from '@/views/meeting/index'
import Speech from '@/views/speech/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        { path: 'meeting', component: Meeting, name: '会议'},
        { path: 'speech', component: Speech, name: '演讲'}
      ]
    },
    {
      path: '/account',
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
