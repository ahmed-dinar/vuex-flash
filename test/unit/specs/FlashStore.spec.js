
import { createFlashStore } from '../../../src/FlashStore';
import { getStore } from '../helpers';


const flashGetter = 'FLASH/getFlashMessage';
const flashSetter = 'FLASH/SET_FLASH';
const flashCleaner ='FLASH/CLEAR_FLASH';


describe('FlashStore', function(){

  var store = getStore();

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
    expect(store.getters[flashGetter]('success')).to.equal('test');
    done();
  });

  it('should commit and clear flash', function(done) {
    store.commit(flashCleaner,'success');
    expect(store.getters[flashGetter]('success')).to.be.null;
    done();
  });

  it('should register custom variant state', function(done) {
    var cstore = getStore(false, { variants: ['customflash'] });
    cstore.commit( flashSetter, { message: 'test custom', variant: 'customflash' } );
    expect(cstore.getters[flashGetter]('customflash')).to.equal('test custom');
    cstore.commit(flashCleaner,'customflash');
    expect(cstore.getters[flashGetter]('customflash')).to.be.null;
    done();
  });

});

