

import Vue from 'vue';
import { hasClass, click, getMixinInstance } from '../helpers';

var namespace = 'FLASH';
var flashGetter = namespace + '/getFlashMessage';


describe('Persist flash',function() {

  this.timeout(10000);

  var vm;

  before(function(done) {
    vm = getMixinInstance({ keep: false }, true);
    done();
  });

  after(function(done) {
    vm.$destroy();
    sessionStorage.removeItem('__vuexFlash');
    done();
  });

  it('should load home page', function(done) {
    vm.$router.push({ path: '/' });
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.text-center h1')).to.not.be.null;
      expect(vm.$el.querySelector('.text-center h1').textContent).to.equal('Vuex Flash');
      expect(vm.$store.getters[flashGetter]('info')).to.be.null;
      expect(vm.$el.querySelector('button.normal-flash-btn')).to.not.be.null;
      done();
    });
  });

  it('should clear persisted data when not keep', function(done) {

    click(vm.$el.querySelector('button.normal-flash-btn'));

    Vue.nextTick(function() {

      expect(vm.$store.getters[flashGetter]('danger')).to.be.null;
      expect(hasClass(vm.$el.querySelector('.text-center div'),'alert')).to.be.true;
      expect(vm.$el.querySelector('a.back-btn')).to.not.be.null;
      expect(vm.$el.querySelector('div.alert').textContent).to.match(/.*I am the flash! B.*/);

      expect(function () {
        JSON.parse( sessionStorage.getItem('__vuexFlash') );
      }).to.not.throw(Error);

      expect(sessionStorage.getItem('__vuexFlash')).to.be.null;

      done();
    });
  });

});



