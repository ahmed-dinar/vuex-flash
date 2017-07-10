
import Vue from 'vue';

import FlashComponent from '../../../src/FlashComponent';
import VuexFlash from '../../../src';
import router from '../../../dev/router';
import { hasClass, click, getInstance, getPluginInstance } from '../helpers';


var flashGetter = 'FLASH/getFlashMessage';
var flashSetter = 'FLASH/SET_FLASH';


describe('Flash Component', function() {

  var Flash = FlashComponent();

  it('has a mounted hook', function() {
    expect(typeof Flash.mounted).to.equal('function');
  });

  it('has a data hook', function() {
    expect(typeof Flash.mounted).to.equal('function');
  });

  it('has a props hook',function() {
    expect(typeof Flash.props).to.equal('object');
  });

  it('has a computed hook', function() {
    expect(typeof Flash.computed).to.equal('object');
  });

  it('has a methods hook', function() {
    expect(typeof Flash.methods).to.equal('object');
  });

  it('sets the correct parameters default data', function() {
    const defaultData = Flash.data();
    expect(defaultData.key).to.equal('__vuexFlash');
    expect(defaultData.duration).to.equal(3000);
  });

  describe('Flash Test',function() {

    this.timeout(10000);

    var vm;


    before(function(done) {
      vm = getInstance(Flash).$mount();
      done();
    });

    after(function(done) {
      vm.$destroy();
      done();
    });

    //Inspect the component instance on mount
    it('correctly load vuex flash data', function(done) {
      router.push({ path: '/' });
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter]('success')).to.be.null;
        expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
        expect(vm.$store.getters[flashGetter]('warning')).to.be.null;
        expect(vm.$store.getters[flashGetter]('info')).to.be.null;
        done();
      });
    });

    it('correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'test flash', variant: 'danger' });
      expect(vm.$store.getters[flashGetter]('danger')).to.equal('test flash');
      done();
    });

    it('should have alert in next page', function(done) {

      router.push({ path: '/flash' });

      Vue.nextTick(function() {
        expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
        expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
        expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*test flash.*/);
        done();
      });

    });

    it('should close alert when click', function(done) {

      click(vm.$el.querySelector('button.close'));

      //waiting for closing alert
      setTimeout(function(){
        expect(vm.$el.querySelector('.text-center div')).to.be.null;
        expect(vm.$el.getElementsByClassName('alert').length).to.equal(0);
        done();
      }, 3000);

    });

    it('should back to home', function(done) {
      router.replace({ path: '/' });
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
        done();
      });
    });

    it('should correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'auto hide flash', variant: 'success' });
      expect(vm.$store.getters[flashGetter]('success')).to.equal('auto hide flash');
      done();
    });

    it('should have alert and auto hide', function(done) {

      router.push({ path: '/autohide' });

      Vue.nextTick(function() {

        expect(vm.$store.getters[flashGetter]('success')).to.be.null;
        expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
        expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*auto hide flash*/);

        setTimeout(function(){
          expect(vm.$el.querySelector('.text-center div')).to.be.null;
          expect(vm.$el.getElementsByClassName('alert').length).to.equal(0);
          done();
        }, 4000);

      });

    });

    it('should back to home', function(done) {
      router.replace({ path: '/' });
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter]('success')).to.be.null;
        done();
      });
    });

    it('should correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'important flash', variant: 'info' });
      expect(vm.$store.getters[flashGetter]('info')).to.equal('important flash');
      done();
    });

    it('should have no close button on important flash', function(done) {
      router.push({ path: '/important' });
      Vue.nextTick(() => {
        expect(vm.$store.getters[flashGetter]('info')).to.be.null;
        expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
        expect(vm.$el.querySelector('.text-center button.close')).to.be.null;
        expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*important flash*/);
        done();
      });
    });

  });
});


describe('Flash Plugin', function() {

  it('should throw error when invalid option given', function(done) {
    expect(function () {
      Vue.use(VuexFlash, []);
    }).to.throw(Error);
    done();
  });

  describe('after register' , function(){

    this.timeout(10000);

    var vm;

    before(function(done) {
      vm = getPluginInstance(VuexFlash).$mount();
      done();
    });

    after(function(done) {
      vm.$destroy();
      done();
    });

    //Inspect the component instance on mount
    it('correctly load vuex flash data', function(done) {
      router.push({ path: '/' });
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter]('info')).to.be.null;
        done();
      });
    });

    it('correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'test flash', variant: 'danger' });
      expect(vm.$store.getters[flashGetter]('danger')).to.equal('test flash');
      done();
    });

    it('should have alert in next page', function(done) {

      router.push({ path: '/flash' });

      Vue.nextTick(function() {
        expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
        expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
        expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*test flash.*/);
        done();
      });

    });

    it('should close alert when click', function(done) {

      click(vm.$el.querySelector('button.close'));

      //waiting for closing alert
      setTimeout(function(){
        expect(vm.$el.querySelector('.text-center div')).to.be.null;
        expect(vm.$el.getElementsByClassName('alert').length).to.equal(0);
        done();
      }, 3000);

    });

    it('should back to home', function(done) {
      router.replace({ path: '/' });
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
        done();
      });
    });

    it('should correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'auto hide flash', variant: 'success' });
      expect(vm.$store.getters[flashGetter]('success')).to.equal('auto hide flash');
      done();
    });

    it('should have alert and auto hide', function(done) {

      router.push({ path: '/autohide' });

      Vue.nextTick(function() {

        expect(vm.$store.getters[flashGetter]('success')).to.be.null;
        expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
        expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*auto hide flash*/);

        setTimeout(function(){
          expect(vm.$el.querySelector('.text-center div')).to.be.null;
          expect(vm.$el.getElementsByClassName('alert').length).to.equal(0);
          done();
        }, 4000);

      });

    });

    it('should back to home', function(done) {
      router.replace({ path: '/' });
      Vue.nextTick(() => {
        expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter]('success')).to.be.null;
        done();
      });
    });

    it('should correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'important flash', variant: 'info' });
      expect(vm.$store.getters[flashGetter]('info')).to.equal('important flash');
      done();
    });

    it('should have no close button on important flash', function(done) {
      router.push({ path: '/important' });
      Vue.nextTick(() => {
        expect(vm.$store.getters[flashGetter]('info')).to.be.null;
        expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
        expect(vm.$el.querySelector('.text-center button.close')).to.be.null;
        expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*important flash*/);
        done();
      });
    });


  });

});


describe('Click, set flash and redirect',function() {

  this.timeout(10000);

  var vm;

  before(function(done) {
    vm = getPluginInstance(VuexFlash).$mount();
    done();
  });

  after(function(done) {
    vm.$destroy();
    done();
  });


  it('should load home page', function(done) {
    router.push({ path: '/' });
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
      expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
      expect(vm.$store.getters[flashGetter]('info')).to.be.null;
      expect(vm.$el.querySelector('button.normal-flash-btn')).to.not.be.null;
      expect(vm.$el.querySelector('button.auto-flash-btn')).to.not.be.null;
      expect(vm.$el.querySelector('button.important-flash-btn')).to.not.be.null;
      done();
    });
  });


  it('should go to normal flash page after click and have the flash alert', function(done) {
    click(vm.$el.querySelector('button.normal-flash-btn'));
    Vue.nextTick(function() {
      expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
      expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
      expect(vm.$el.querySelector('a.back-btn')).to.not.be.null;
      expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*I am the flash! B.*/);
      done();
    });
  });

  it('should back to home after clicking back to home button', function(done) {
    click(vm.$el.querySelector('a.back-btn'));
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
      expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
      expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
      done();
    });
  });

  it('should go to auto hide flash page after click and hide the alert', function(done) {
    click(vm.$el.querySelector('button.auto-flash-btn'));
    Vue.nextTick(function() {
      expect(vm.$store.getters[flashGetter]('success')).to.be.null;
      expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
      expect(vm.$el.querySelector('a.back-btn')).to.not.be.null;
      expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*I will hide soon.*/);

      setTimeout(function(){
        expect(vm.$el.querySelector('.text-center div')).to.be.null;
        expect(vm.$el.getElementsByClassName('alert').length).to.equal(0);
        done();
      }, 4000);

    });
  });

  it('should back to home', function(done) {
    click(vm.$el.querySelector('a.back-btn'));
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
      expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
      expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
      done();
    });
  });

  it('should go to important flash page after click and have the flash alert', function(done) {
    click(vm.$el.querySelector('button.important-flash-btn'));
    Vue.nextTick(function() {
      expect(vm.$store.getters[flashGetter]('info')).to.be.null;
      expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
      expect(vm.$el.querySelector('a.back-btn')).to.not.be.null;
      expect(vm.$el.querySelector('.text-center button.close')).to.be.null;
      expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*You can't hide me! really.*/);
      done();
    });
  });

  it('should back to home', function(done) {
    click(vm.$el.querySelector('a.back-btn'));
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
      expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
      expect(vm.$store.getters[flashGetter]('info')).to.be.null;
      done();
    });
  });

  it('should go to multiple flash page after click', function(done) {
    click(vm.$el.querySelector('button.multiple-flash-btn'));
    Vue.nextTick(function() {

      expect(vm.$el.querySelector('div.alert-danger')).to.not.be.null;
      expect(vm.$el.querySelector('div.alert-success')).to.not.be.null;
      expect(vm.$el.querySelector('div.alert-info')).to.not.be.null;

      expect(vm.$el.querySelector('div.alert-danger').textContent).to.match(/.*I am gonna hide bro.*/);
      expect(vm.$el.querySelector('div.alert-success').textContent).to.match(/.*We are multiple flash.*/);
      expect(vm.$el.querySelector('div.alert-info').textContent).to.match(/.*Yeh bro*/);

      expect(vm.$el.querySelector('a.back-btn')).to.not.be.null;

      expect(vm.$store.getters[flashGetter]('success')).to.be.null;
      expect(vm.$store.getters[flashGetter]('info')).to.be.null;
      expect(vm.$store.getters[flashGetter]('danger')).to.be.null;

      setTimeout(function(){
        expect(vm.$el.querySelector('div.alert-danger')).to.be.null;
        done();
      }, 4000);


    });
  });

});


