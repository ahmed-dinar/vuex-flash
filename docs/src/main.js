
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import VuexFlash from 'vuex-flash';
import { FlashComponent } from 'vuex-flash';

import App from './App';
import router from './router';
import store from './store';
import templates from './lib/templates';


import 'nprogress/nprogress.css';
import 'animate.css/animate.css';
import 'highlight.js/styles/github-gist.css';
import './assets/uikit-alert.css';
import './assets/bulma-notification.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css';

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);

Vue.use(VuexFlash, {
  mixin: true
});


Vue.component('BulmaFlash', FlashComponent({
  template: templates.bulma.template(),
  variantClass: templates.bulma.variantClass(),
  css: ['notification']
}));

Vue.component('UikitFlash', FlashComponent({
  template: templates.uikit.template(),
  variantClass: templates.uikit.variantClass(),
  css: ['uk-alert']
}));


Vue.component('CustomTransition', FlashComponent({
  template: templates.transition.custom
}));

Vue.component('NoTransition', FlashComponent({
  template: templates.transition.none
}));


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
