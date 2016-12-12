/**
 * Created by pengwei on 2016/12/12.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations,
  actions,
  getters
});

export default store;
