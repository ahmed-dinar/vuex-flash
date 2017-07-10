
import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import createPersistedState from 'vuex-persistedstate';

import App from '../../../dev/App.vue';
import Mixin from './Mixin.vue';
import router from '../../../dev/router';
import { createFlashStore } from '../../../src/FlashStore';
import ShowFlash from './ShowFlash';


//https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}


//https://stackoverflow.com/questions/15739263/phantomjs-click-an-element
function click(el){
  var ev = document.createEvent('MouseEvent');
  ev.initMouseEvent(
    'click',
    true /* bubble */, true /* cancelable */,
    window, null,
    0, 0, 0, 0, /* coordinates */
    false, false, false, false, /* modifier keys */
    0 /*left*/, null
  );
  el.dispatchEvent(ev);
}



function getInstance(comp){

  Vue.component('FlashMessage', comp);

  return new Vue({
    router,
    store: getStore(),
    template: '<App/>',
    components: { App }
  });
}

function getPluginInstance(plugin, options){

  Vue.use(plugin, options);

  return new Vue({
    router,
    store: getStore(),
    template: '<App/>',
    components: { App }
  });
}


function getMixinInstance(config = {}, persist = false){

  return new Vue({
    router: getRouter(config),
    store: getStore(persist),
    template: '<App/>',
    components: { App }
  }).$mount();
}




function getStore(persist = false, config = {}){

  Vue.use(Vuex);

  const plugins = [createFlashStore(config)];

  if(persist){

    plugins.push(
      createPersistedState({
        paths: ['FLASH'],
        key: '__vuexFlash',
        storage: window.sessionStorage,
        filter: mutation => {
          return mutation.type === 'FLASH/SET_FLASH';
        }
      })
    );
  }

  return new Vuex.Store({
    plugins
  });
}



function getRouter(config){

  Vue.use(Router);

  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Mixin
      },
      {
        path: '/flash',
        name: 'Flash',
        component: ShowFlash(config)
      }
    ]
  });
}

export { hasClass, click, getStore, getInstance, getPluginInstance, getMixinInstance, getRouter };
