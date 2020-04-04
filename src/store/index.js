import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

// 安装vuex
Vue.use(Vuex)

const state = {
  products: [],
  // 记录loading的状态
  isLoadingShow: false,
  // 保存用户信息
  userinfo: {}
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store