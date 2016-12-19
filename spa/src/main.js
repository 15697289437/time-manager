/* @flow  */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import store from './store';
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
/* eslint-disable */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
