


export function createFlashStore(options = {}){

  if( typeof options !== 'object' || Array.isArray(options) ){
    throw new Error('[vuex-flash error] valid options object required');
  }

  //the vuex module will register under this name
  const moduleName = options.namespace || 'FLASH';

  //the vuex mutation name use to set flash message
  const SET_FLASH = options.setter || 'SET_FLASH';

  //the vuex mutation name use to clear flash message
  const CLEAR_FLASH = 'CLEAR_FLASH';

  //custom variant support
  var customVariants = (options.variants || []).map(k => ({ [k]: null }));

  const state = Object.assign({
    success: null,
    danger: null,
    info: null,
    warning: null
  }, ...customVariants);

  const mutations = {
    [SET_FLASH] (state, flash) {
      state[flash.variant] = flash.message;
    },
    [CLEAR_FLASH] (state, variant) {
      if( state[variant] ){
        state[variant] = null;
      }
    }
  };

  const getters ={
    getFlashMessage: state => {
      return variant => state[variant];
    },
    flashed: state => {
      return Object.keys(state).filter(key => state[key] !== null).length === 0;
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
