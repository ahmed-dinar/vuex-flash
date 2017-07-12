

import 'es6-promise/auto';

import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import VuexFlash from '../src';

Vue.config.productionTip = false;

Vue.use(VuexFlash);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});