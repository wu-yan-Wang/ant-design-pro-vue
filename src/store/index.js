import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'

// default router permission control
import permission from './modules/async-router'

// 字典
import dict from '@/store/modules/dict'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    dict
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters
})
