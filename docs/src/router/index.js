
import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

import Home from '@/components/Home';
import Basic from '@/components/Basic';
import AutoHide from '@/components/AutoHide';
import Important from '@/components/Important';
import Multiple from '@/components/Multiple';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
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
    },
    {
      path: '/multiple',
      name: 'Multiple',
      component: Multiple
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to,from) => {
  NProgress.done();
  NProgress.remove();
});


export default router;