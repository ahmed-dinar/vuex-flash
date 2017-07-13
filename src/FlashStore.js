


export function createFlashStore(
  {
    //the vuex module will register under this name
    namespace = 'FLASH',
    //the vuex mutation name use to set flash message
    setter = 'SET_FLASH',
    //custom variant support
    variants = []
  } = {}
){

  //the vuex mutation name use to clear flash message
  const CLEAR_FLASH = 'CLEAR_FLASH';

  //merge custom variants with default
  const state = Object.assign({
    success: null,
    danger: null,
    info: null,
    warning: null
  }, ...variants.map(k => ({ [k]: null })));

  const mutations = {
    [setter] (state, flash) {
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
    store.registerModule(namespace, {
      namespaced: true,
      state,
      getters,
      mutations
    });
  };
}
