
import { SET_FLASH, CLEAR_FLASH } from './mutation-types';

const state = {
  message: null,
  variant: null
};

const getters ={
  getFlash: state => {
    return {
      message: state.message,
      variant: state.variant
    };
  }
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

export default {
  state,
  getters,
  mutations
};