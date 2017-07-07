
import flash from './flash';

export { createFlashStore } from './FlashStore';

export default {

  install(Vue, config = {}) {

    if( typeof config !== 'object' || Array.isArray(config) ){
      throw new Error('[vuex-flash error] valid option object required');
    }

    let name = config.name || 'FlashMessage';

    Vue.component(name, flash(config) );
  }
};
