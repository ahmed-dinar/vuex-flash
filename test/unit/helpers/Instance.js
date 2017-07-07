

import Vue from 'vue';

import App from '../../../dev/App.vue';
import router from '../../../dev/router';
import store from './store';

export function getInstance(comp){

  Vue.component('FlashMessage', comp);

  return new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
  });
}

export function getPluginInstance(plugin, options){

  Vue.use(plugin, options);

  return new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
  });
}
