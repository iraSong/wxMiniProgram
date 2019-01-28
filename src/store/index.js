import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */

const store = new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
    }
  }
})

export default store
