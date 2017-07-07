
import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home';
import Flash from './components/Flash';
import AutoHide from './components/AutoHide';
import Important from './components/Important';

Vue.use(Router);

const router = new Router({

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/flash',
      name: 'flash',
      component: Flash
    },
    {
      path: '/autohide',
      name: 'autohide',
      component: AutoHide
    },
    {
      path: '/important',
      name: 'Important',
      component: Important
    }
  ]
});




export default router;