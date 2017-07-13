import Vue from 'vue';
import Vuex from 'vuex';

import { createFlashStore } from 'vuex-flash';
import templates from '../lib/templates';

Vue.use(Vuex);

export default new Vuex.Store({

  plugins: [
    createFlashStore({
      variants: [
        ...templates.bulma.variants(),
        ...templates.uikit.variants(),
        'primary',
        'grey'
      ]
    })
  ]
});