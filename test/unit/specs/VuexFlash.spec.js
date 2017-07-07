
import Vue from 'vue';
import flash from '../../../src/flash';
import VuexFlash from '../../../src';
import { getInstance, getPluginInstance } from '../helpers/Instance';
import { hasClass, click } from '../helpers';
import router from '../../../dev/router';

var Flash = flash();
var namespace = 'FLASH';
var flashGetter = namespace + '/getFlashMessage';
var flashSetter = namespace + '/SET_FLASH';

describe('Flash Component', function() {

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
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter].message).to.be.null;
        done();
      });
    });

    it('correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'test flash', variant: 'success' });
      expect(vm.$store.getters[flashGetter].message).to.equal('test flash');
      expect(vm.$store.getters[flashGetter].variant).to.equal('success');
      done();
    });

    it('should have alert in next page', function(done) {

      router.push({ path: '/flash' });

      Vue.nextTick(function() {
        expect(vm.$store.getters[flashGetter].message).to.be.null;
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
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter].message).to.be.null;
        done();
      });
    });

    it('should correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'auto hide flash', variant: 'success' });
      expect(vm.$store.getters[flashGetter].message).to.equal('auto hide flash');
      expect(vm.$store.getters[flashGetter].variant).to.equal('success');
      done();
    });

    it('should have alert and auto hide', function(done) {

      router.push({ path: '/autohide' });

      Vue.nextTick(function() {

        expect(vm.$store.getters[flashGetter].message).to.be.null;
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
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter].message).to.be.null;
        done();
      });
    });

    it('should correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'important flash', variant: 'success' });
      expect(vm.$store.getters[flashGetter].message).to.equal('important flash');
      expect(vm.$store.getters[flashGetter].variant).to.equal('success');
      done();
    });

    it('should have no close button on important flash', function(done) {
      router.push({ path: '/important' });
      Vue.nextTick(() => {
        expect(vm.$store.getters[flashGetter].message).to.be.null;
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
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter].message).to.be.null;
        done();
      });
    });

    it('correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'test flash', variant: 'success' });
      expect(vm.$store.getters[flashGetter].message).to.equal('test flash');
      expect(vm.$store.getters[flashGetter].variant).to.equal('success');
      done();
    });

    it('should have alert in next page', function(done) {

      router.push({ path: '/flash' });

      Vue.nextTick(function() {
        expect(vm.$store.getters[flashGetter].message).to.be.null;
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
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter].message).to.be.null;
        done();
      });
    });

    it('should correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'auto hide flash', variant: 'success' });
      expect(vm.$store.getters[flashGetter].message).to.equal('auto hide flash');
      expect(vm.$store.getters[flashGetter].variant).to.equal('success');
      done();
    });

    it('should have alert and auto hide', function(done) {

      router.push({ path: '/autohide' });

      Vue.nextTick(function() {

        expect(vm.$store.getters[flashGetter].message).to.be.null;
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
        expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
        expect(vm.$store.getters[flashGetter].message).to.be.null;
        done();
      });
    });

    it('should correctly sets vuex flash data', function(done) {
      vm.$store.commit(flashSetter, { message: 'important flash', variant: 'success' });
      expect(vm.$store.getters[flashGetter].message).to.equal('important flash');
      expect(vm.$store.getters[flashGetter].variant).to.equal('success');
      done();
    });

    it('should have no close button on important flash', function(done) {
      router.push({ path: '/important' });
      Vue.nextTick(() => {
        expect(vm.$store.getters[flashGetter].message).to.be.null;
        expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
        expect(vm.$el.querySelector('.text-center button.close')).to.be.null;
        expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*important flash*/);
        done();
      });
    });


  });



});