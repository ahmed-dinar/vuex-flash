

import 'es6-promise/auto';

import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import VuexFlash from '../src';
import { FlashComponent } from '../src';


Vue.use(VuexFlash);

Vue.component('BulmaFlash', FlashComponent({

  template: `
        <transition
        :name="transitionName"
        :enter-active-class="transitionIn"
        :leave-active-class="transitionOut"
        >
          <div v-if="show"
          :class="cssClasses"
          >
            <button v-if="!important"
            class="delete"
            @click.stop.prevent="closeFlash"
            >
            </button>

            {{ message }}

          </div>

        </transition>`,

  variantClass: function(){
    return `is-${this.variant.split('_')[1]}`;
  }

}));

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});