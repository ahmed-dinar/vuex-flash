<h1 align="center">
  Vuex Flash
</h1>
<p align="center">
Flash message component for Vue.js within Vuex
</p>

<p align="center">
  <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?style=flat-square&maxAge=604800" alt="Vue.js 2.x compatible"></a>
  <a href="https://vuex.vuejs.org/en/"><img src="https://img.shields.io/badge/vuex-2.x-green.svg?style=flat-square&maxAge=604800" alt="Vuex 2.x compatible"></a>
  <a href="https://travis-ci.org/ahmed-dinar/vuex-flash"><img src="https://img.shields.io/travis/ahmed-dinar/vuex-flash.svg?style=flat-square" alt="travis-ci build"></a>
  <a href="https://coveralls.io/github/ahmed-dinar/vuex-flash?branch=master"><img src="https://img.shields.io/coveralls/hmed-dinar/vuex-flash/master.svg?style=flat-square" alt="coveralls"></a>
  <a href="https://www.npmjs.com/package/vuex-flash"><img src="https://img.shields.io/npm/v/vuex-flash.svg?style=flat-square" alt="npm package"></a>
  <a href="https://david-dm.org/ahmed-dinar/vuex-flash"><img src="https://img.shields.io/david/ahmed-dinar/vuex-flash.svg?style=flat-square" alt="dependency"></a>
  <a href="https://david-dm.org/ahmed-dinar/vuex-flash#info=devDependencies"><img src="https://img.shields.io/david/dev/ahmed-dinar/vuex-flash.svg?style=flat-square&label=dev" alt="dev dependency"></a>
  <a href="https://www.codacy.com/app/ahmed-dinar/vuex-flash?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ahmed-dinar/vuex-flash&amp;utm_campaign=Badge_Grade"><img src="https://img.shields.io/codacy/grade/8515c14218ec49c384b276fba758f983.svg?style=flat-square&label=codacy" alt="code quality"></a>
  <a href="https://github.com/ahmed-dinar/vuex-flash/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&maxAge=604800" alt="license"></a>
</p>

## :surfer: Coming soon
#### npm package will be available soon with proper documentation


### Usage

```javascript
//main.js

import Vue from 'vue';
import VuexFlash from 'vuex-flash';

Vue.use(VuexFlash);
```

```javascript
//store.js

import Vue from 'vue';
import Vuex from 'vuex';

import { createFlashStore } from 'vuex-flash';

Vue.use(Vuex);

export default new Vuex.Store({
  // ...
  plugins: [
    createFlashStore()
  ]
});
```

```javascript
//in component

<template>
  <flash-message></flash-message>
  ......
</template>
```


### License
[MIT](http://opensource.org/licenses/MIT)
