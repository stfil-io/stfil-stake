import { createStore } from 'vuex'

export default createStore({
  state: {
    modal: false
  },
  getters: {
  },
  mutations: {
    setModalFlag(state, flag){
      state.modal = flag
    }
  },
  actions: {
  },
  modules: {
  }
})
