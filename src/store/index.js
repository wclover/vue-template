import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapse: true
  },
  getters: {
    collapse: state => state.collapse
  },
  mutations: {
    SWITCH_COLLAPSE(state) {
      state.collapse = !state.collapse;
    }
  },
  actions: {
    switchCollapse({ commit }) {
      commit('SWITCH_COLLAPSE');
    }
  },
  modules: {
  }
});
