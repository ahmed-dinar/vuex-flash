
import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

import Home from '@/components/Home';
import Basic from '@/components/Basic';
import AutoHide from '@/components/AutoHide';
import Important from '@/components/Important';
import Multiple from '@/components/Multiple';
import Bulma from '@/components/Bulma';
import Uikit from '@/components/Uikit';
import Grey from '@/components/Grey';
import CustomTransition from '@/components/CustomTransition';
import NoTransition from '@/components/NoTransition';

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
    },
    {
      path: '/bulma',
      name: 'bulma',
      component: Bulma
    },
    {
      path: '/uikit',
      name: 'uikit',
      component: Uikit
    },
    {
      path: '/grey',
      name: 'grey',
      component: Grey
    },
    {
      path: '/transition',
      name: 'transition',
      component: CustomTransition
    },
    {
      path: '/notransition',
      name: 'NoTransition',
      component: NoTransition
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