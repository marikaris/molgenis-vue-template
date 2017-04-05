/**
 * Created by mdehaan on 05/04/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'

// Mutations
export const SET_MESSAGE = '__SET_MESSAGE__'

Vue.use(Vuex)

const message = window.__INITIAL_STATE__

export default new Vuex.Store({
  state: {
    message: message
  },
  mutations: {
    [SET_MESSAGE] (state, message) {
      state.message = message
    }
  },
  actions: {}
})
