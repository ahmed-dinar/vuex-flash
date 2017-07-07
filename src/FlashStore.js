


export function createFlashStore(options = {}){

  if( typeof options !== 'object' || Array.isArray(options) ){
    throw new Error('[vuex-flash error] valid options object required');
  }

  const moduleName = options.namespace || 'FLASH';
  const SET_FLASH = options.setter || 'SET_FLASH';
  const CLEAR_FLASH = 'CLEAR_FLASH';

  const state = {
    message: null,
    variant: null
  };

  const mutations = {
    [SET_FLASH] (state, flash) {
      state.message = flash.message;
      state.variant = flash.variant;
    },
    [CLEAR_FLASH] (state) {
      state.message = null;
      state.variant = null;
    }
  };

  const getters ={
    getFlashMessage: state => {
      return {
        message: state.message,
        variant: state.variant
      };
    }
  };

  return store => {
    store.registerModule(moduleName, {
      namespaced: true,
      state,
      getters,
      mutations
    });
  };
}
