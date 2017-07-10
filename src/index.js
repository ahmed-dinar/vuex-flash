
import FlashComponent from './FlashComponent';

export default {
  install(Vue, config = {}) {

    if( typeof config !== 'object' || Array.isArray(config) ){
      throw new Error('[vuex-flash error] valid option object required');
    }

    config.namespace = config.namespace || 'FLASH';

    /* istanbul ignore next */
    if( config.mixin ){

      const FLASH_METHOD = config.method || 'flash';

      Vue.mixin({
        methods: {
          [FLASH_METHOD] (message) {
            this.$store.commit(`${config.namespace}/SET_FLASH`, message);
          }
        }
      });
    }

    Vue.component(config.name || 'FlashMessage', FlashComponent(config) );
  }
};

export { createFlashStore } from './FlashStore';