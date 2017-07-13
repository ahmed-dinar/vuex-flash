import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { createFlashStore } from 'vuex-flash';

Vue.use(Vuex);

export default new Vuex.Store({

  plugins: [

    createFlashStore(),

    createPersistedState({
      paths: ['FLASH'],
      key: '__vuexFlash',
      storage: window.sessionStorage,
      filter: mutation => {
        return mutation.type === 'FLASH/SET_FLASH';
      }
    })
  ]
});