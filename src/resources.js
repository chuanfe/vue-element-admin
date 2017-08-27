import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'http://122.152.197.173:8000'

let token = window.localStorage.getItem('token')
// if (token) {
//   axios.defaults.headers.common['Authorization'] = 'YUHE ' + token
// }

export function resetPassword (email) {
  return Vue.axios.post('/accounts/password/reset/', {email: email})
}

export function signup (resInfo) {
  console.log(resInfo)
  return Vue.axios.post('/accounts/register/', resInfo)
}

export function signin (signInfo) {
  return Vue.axios.post('/accounts/login/', signInfo)
}

export function logoutApi (token) {
  return Vue.axios.post('/accounts/logout/', token)
}


