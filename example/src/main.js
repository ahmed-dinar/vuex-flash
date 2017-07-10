
import Vue from 'vue';
import VuexFlash from 'vuex-flash';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VuexFlash);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});