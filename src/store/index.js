import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: { 
		isCollapse: true,
		userInfo:''
  },
  mutations: { 
    slideMenu(state) {
      state.isCollapse = !state.isCollapse
		},
		setUserInfo(state, data) {
			state.userInfo = data
		}
  }
})