// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import VueHttp from 'vue-resource';
import routerConfig from '../config/routerconfig';

Vue.use(VueRouter);
Vue.use(VueHttp);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: routerConfig,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
