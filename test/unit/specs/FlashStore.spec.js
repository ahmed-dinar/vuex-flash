
import { createFlashStore } from '../../../src/FlashStore';
import store from '../helpers/store';

var namespace = 'FLASH';
var flashGetter = namespace + '/getFlashMessage';
var flashSetter = namespace + '/SET_FLASH';
var flashCleaner = namespace + '/CLEAR_FLASH';


describe('FlashStore', function(){

  it('should throw error when invalid option given', function(done) {
    expect(function () {
      createFlashStore([]);
    }).to.throw(Error);
    done();
  });

  it('should register plugin', function(done) {
    expect(store.getters[flashGetter]).to.not.be.undefined;
    done();
  });

  it('should commit and set flash', function(done) {
    store.commit(flashSetter, { message: 'test', variant: 'success' });
    expect(store.getters[flashGetter].message).to.equal('test');
    expect(store.getters[flashGetter].variant).to.equal('success');
    done();
  });

  it('should commit and clear flash', function(done) {
    store.commit(flashCleaner);
    expect(store.getters[flashGetter].message).to.be.null;
    expect(store.getters[flashGetter].variant).to.be.null;
    done();
  });

});