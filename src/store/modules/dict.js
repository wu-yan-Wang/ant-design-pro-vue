import { LOAD_DICT } from '../mutation-types'
import { loadDictCache } from '@/api/system/dict'
const dict = {
  namespaced: true,
  state: {
    dictCache: {}
  },
  getters: {
    dictCache (state) {
      return state.dictCache
    }
  },
  mutations: {
    [LOAD_DICT] (state, payload) {
      state.dictCache = payload
    }
  },
  actions: {
    LOAD_DICT ({ commit }) {
      loadDictCache().then(res => {
        commit(LOAD_DICT, res.result)
      })
    }
  }
}

export default dict
