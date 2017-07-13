<h1 align="center">
Vuex Flash
</h1>
<p align="center">
Flash message component for Vue.js within Vuex
</p>

<p align="center">
  <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.3.x-brightgreen.svg?style=flat-square&maxAge=604800" alt="Vue.js 2.x compatible"></a>
  <a href="https://vuex.vuejs.org/en/"><img src="https://img.shields.io/badge/vuex-2.3.x-green.svg?style=flat-square&maxAge=604800" alt="Vuex 2.x compatible"></a>
  <a href="https://travis-ci.org/ahmed-dinar/vuex-flash"><img src="https://img.shields.io/travis/ahmed-dinar/vuex-flash.svg?style=flat-square" alt="travis-ci build"></a>
  <a href="https://circleci.com/gh/ahmed-dinar/vuex-flash"><img src="https://img.shields.io/circleci/project/github/ahmed-dinar/vuex-flash.svg?style=flat-square&label=circleci" alt="circleci build"></a>
  <a href="https://coveralls.io/github/ahmed-dinar/vuex-flash?branch=master"><img src="https://img.shields.io/coveralls/ahmed-dinar/vuex-flash/master.svg?style=flat-square" alt="coveralls"></a>
  <a href="https://www.npmjs.com/package/vuex-flash"><img src="https://img.shields.io/npm/v/vuex-flash.svg?style=flat-square" alt="npm package"></a>
  <a href="https://david-dm.org/ahmed-dinar/vuex-flash"><img src="https://img.shields.io/david/ahmed-dinar/vuex-flash.svg?style=flat-square" alt="dependency"></a>
  <a href="https://www.codacy.com/app/ahmed-dinar/vuex-flash?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ahmed-dinar/vuex-flash&amp;utm_campaign=Badge_Grade"><img src="https://img.shields.io/codacy/grade/8515c14218ec49c384b276fba758f983.svg?style=flat-square&label=codacy" alt="code quality"></a>
  <a href="https://github.com/ahmed-dinar/vuex-flash/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&maxAge=604800" alt="license"></a>
</p>

### Features

- [**multiple flash**](#multiple-flash)
- [**custom template**](#custom-template)
- [**persist flash data in storage**](#persist-flash-message)
- [**highly customizable**](#api)

### Demo & Example

#### [Live demo with code snippet](https://ahmed-dinar.github.io/vuex-flash)

### Install
```
$ npm install --save vuex-flash
```

### Usage

**register component:**
```javascript
//main.js

import Vue from 'vue';
import VuexFlash from 'vuex-flash';

Vue.use(VuexFlash);
```

**register vuex store:**
```javascript
//store.js

import { createFlashStore } from 'vuex-flash';

const store = new Vuex.Store({
  // ...
  plugins: [
    createFlashStore()
  ]
});
```

### Flash data

##### Using `global mixin`

Simply put an option `mixin: true` while registering component, the `this.flash` method will avaiable in every component

```javascript
Vue.use(VuexFlash, { mixin: true });
```
Then in other components:

```javascript
this.flash({ message: 'some message', variant: 'success' });
this.$router.push('/somepage'); //redirect to /somepage
```
You can change the method name:
```javascript
Vue.use(VuexFlash, { mixin: true, method: 'flashMe' });
//now
this.flashMe({ message: 'some message', variant: 'success' });
```
###### about [global mixin](https://vuejs.org/v2/guide/mixins.html#Global-Mixin)

##### Using `mutation`

Instead of global mixin, you can commit mutation from components to set flash message:

```javascript
methods: {
  //...
  someMethod(){
    //..
    this.$store.commit('FLASH/SET_FLASH', { message: 'some message', variant: 'success' });
  }
}
```
In **`mapMutations`** way:

```javascript

methods: {
  //...
  someMethod(){
    //..
    this.flash({ message: 'some message', variant: 'success' });
  },

  ...mapMutations({
    flash: 'FLASH/SET_FLASH'
  })
}
```
Note that the default mutation type is `FLASH/SET_FLASH`. You can configure it in [options](#createflashstoreoptions).

### Display flash

```javascript
//in somepage component

<template>
  <flash-message variant="success"></flash-message>
  //......
</template>
```

### Multiple flash

```javascript
this.flash({ message: 'some success message', variant: 'success' });
this.flash({ message: 'some warning message', variant: 'warning' });
this.flash({ message: 'some danger message', variant: 'danger' });
this.$router.push('/somepage'); //redirect to /somepage
```
```javascript
//in somepage
<flash-message variant="success"></flash-message>
<flash-message variant="danger"></flash-message>
<flash-message variant="warning"></flash-message>
```

### Props

|     Name       |   Type      |          Default          |              Desciption                                                                                                 |
|     ---:       |    :---:    |           :---:           |                :---                                                                                                     |
|    variant     |   String    |            -              | **`required`** prop.the flash variant type                                                                              |
|    important   |   Boolean   |            false          | if true, there will no close option of flash alert                                                                      |
|    autoHide    |   Boolean   |            false          | auto hide flash alert                                                                                                   |
| transitionName |   String    | custom-classes-transition | vue transitions `name` prop [More](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes)               |
| transitionIn   |   String    | 'animated fadeInDown'     | space separted string for vue transitions `enter-active-class` prop [More](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes) |
| transitionOut  |   String    | 'animated fadeOutUp'      | space separted string for vue transitions `leave-active-class` prop [More](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes) |

#### Flash alert style

**vuex-flash uses [Bootstrap v4 alert](https://v4-alpha.getbootstrap.com/components/alerts/) component as default alert.You need to add 
[bootstrap css](https://v4-alpha.getbootstrap.com/getting-started/download/#bootstrap-cdn) file in your head tag.**

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
```

**You can always use your own alert using [custom template](#custom-template).**

#### Variant
The Default variant types are:
* success
* warning
* danger
* info

You can [add custom variants](#createflashstoreoptions).

#### Transition

vuex-flash uses [animate.css](https://daneden.github.io/animate.css/) as default transition effect.You need to add the
[css](https://github.com/daneden/animate.css#basic-usage) file in your head tag
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
```
You can set different animation style using `transitionIn` and `transitionOut` props in multiple flash messages:
```javascript
<flash-message variant="success" transitionIn="animated bounceIn" transitionOut="animated bounceOut"></flash-message>
<flash-message variant="danger" transitionIn="animated flipInX" transitionOut="animated flipOutX"></flash-message>
```

If you choose to use [custom template](#custom-template), then you need to add this feature yourself if you want.

### Custom Template

- The default template can be found [here](https://github.com/ahmed-dinar/vuex-flash/blob/master/src/FlashComponent.js#L6-L28).
- Put **`{{ message }}`** inside your template where you want to show the flash message.
- Use **`v-if="show"`** to show the alert.
- The **`cssClasses`** string data will be all classes including `variant class` and your `custom classes` that you provide
in [options](#vueusevuexflash-options). Bind class **`:class="cssClasses"`**
- Use **`closeFlash`** method to trigger the close button click.
- **[Here is an example](https://github.com/ahmed-dinar/vuex-flash/blob/master/example/bulma.js#L11)** that showing the implementation of custom template of [Bulma notification](http://bulma.io/documentation/elements/notification/)

### Persist Flash message

- **[Here is an example](https://github.com/ahmed-dinar/vuex-flash/blob/master/example/persist.js)** that shows how to persist vuex state in sessionStorage using [vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate).
- The [path](https://github.com/ahmed-dinar/vuex-flash/blob/master/example/store/persist.js#L15) must be same as the [namespace](#createflashstoreoptions).
- The [mutataion type](https://github.com/ahmed-dinar/vuex-flash/blob/master/example/store/persist.js#L19) in filter must be same as the [config mutation key](#createflashstoreoptions)

## API

### `Vue.use(VuexFlash, [options]);`

The following options are available to configure the component plugin:

- `name [String]` - The component name. `(default: 'FlashMessage')`

- `mixin [Boolean]` - If true, an global method mixin will register for setting flash data. `(default: false)`

- `method [String]` - If `mixin` is set true and this option is given, then global mixin method  will [register](#using-global-mixin) under this name. `(default: 'flash')`

- `namespace` - [String] -  The namespace is the name used for creating vuex flash module.This should be same as the [`createFlashStore` namespace](#createflashstoreoptions).
this namespace used for commiting mutation to [set](#using-mutation) and clear flash data. If provided, the [mutation type](#using-mutation) will be
`'{namespace}/SET_FLASH'`. `(default: 'FLASH')`

- `duration [Number]` - The flash message display duration (in milliseconds) for auto hide flashes. `(default: 3000)`

- `template [String]` - The template to use showing alert. See [custom template](#custom-template).

- `keep [Boolean]` - If false and data is persisted in storage, the storage will cleared after displaying alert every time.
if provided, the storage will keep with null value. `(default: true)`

- `storage [Storage]` - The Storage where the data is persisted. If `keep` is set to false, the data will be cleared from this
storage. `(default: sessionStorage)`

- `key [String]` - The key is used by the store to persist data. `(default: '__vuexFlash')`

- `css [Array]` - An array of custom css class names. This is very useful when creating
[custom template](#custom-template). `(default: [])`

- `variantClass [Function]` - A function returns a css class name to styling alert component based on current variant.
.Can access the current variant using `this.variant`. [Do not use arrow function](https://stackoverflow.com/a/28372106).<br>
``(default: function(){ return `alert-${this.variant}`; })``

- `clearPersisted [Function]` - A function used for clearing persisted data from storage when `keep` is set to false.Can access the storage using
`this.storage`. [Do not use arrow function](https://stackoverflow.com/a/28372106).<br>
``(default: function(){ this.storage.removeItem(this.key); })``


### `createFlashStore([options])`

The following options are available to configure the vuex store plugin:

- `namespace [String]` - This namespace is the name used for registering the vuex-flash store module. `(default: 'FLASH')`

- `setter [String]` - This is the `mutation name` of flash message setter.If provided, the [mutation key](#using-mutation) will be
`'${namespace}/${setter}'`. `(default: 'SET_FLASH')`

- `variants [Array]` - An array of Custom variants to use as state.Will be merged with [default variants](#variant). `(default: [])`

### License
[MIT](http://opensource.org/licenses/MIT)
