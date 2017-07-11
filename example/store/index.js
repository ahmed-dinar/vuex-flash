import Vue from 'vue';
import Vuex from 'vuex';
import { createFlashStore } from 'vuex-flash';

Vue.use(Vuex);

export default new Vuex.Store({

  plugins: [
    createFlashStore()
  ]

});