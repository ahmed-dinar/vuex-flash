import Vue from 'vue';
import Vuex from 'vuex';

import { createFlashStore } from '../../src';

Vue.use(Vuex);

export default new Vuex.Store({

  plugins: [
    createFlashStore()
  ]

});