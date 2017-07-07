/**
 * Copyright (C) 2017 Ahmed Dinar
 * 05/07/2017
 */



const defaultTemplate = `

  <transition
    :name="transitionName"
    :enter-active-class="transitionIn"
    :leave-active-class="transitionOut"
  >
    <div v-if="show"
         :class="cssClasses"
         role="alert"
         aria-live="polite"
         aria-atomic="true"
    >
        <button v-if="!important"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="alertClose"
                @click.stop.prevent="closeFlash"
        >
            <span aria-hidden="true">&times;</span>
        </button>
        {{ message }}
    </div>

  </transition>

`;

export default function(
  {
    namespace = 'FLASH',
    key = '__vuexFlash',
    duration = 3000,
    template = defaultTemplate,
    storage = null,
    save = true
  } = {}
) {

  if( save && !storage ){
    storage = window && window.sessionStorage;
  }

  const CLEAR_FLASH = `${namespace}/CLEAR_FLASH`;

  return {

    template,

    props: {
      variant: {
        type: String,
        default: null
      },
      important: {
        type: Boolean,
        default: false
      },
      autoHide: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: false
      },
      transitionName:{
        type: String,
        default: 'custom-classes-transition'
      },
      transitionIn:{
        type: String,
        default: 'animated fadeInDown'
      },
      transitionOut:{
        type: String,
        default: 'animated fadeOutUp'
      }
    },

    data(){

      return Object.assign({
        message: null,
        localVariant: null,
        closed: false,
        _timeout: null
      }, { namespace, key, duration, storage, save });
    },

    mounted() {

      let flashes = this.getFlash;

      if( !flashes ){
        throw new Error('[vuex-flash error] flash store undefined.Make sure you have register the createFlashStore plugin in your vuex store.');
      }

      if( flashes.message ){
        this.localVariant = flashes.variant || 'success';
        this.message = flashes.message;
        this.clearFlash();
        if( this.autoHide ){
          this.autoClose();
        }
      }
    },

    computed: {

      cssClasses(){
        return [
          'alert',
          this.variant ? `alert-${this.variant}` : `alert-${this.localVariant}`,
          this.important ? 'alert-dismissible' : '',
          this.center ? 'text-center' : ''
        ];
      },

      show(){
        return ! this.closed && !! this.message;
      },

      getFlash(){
        return this.$store.getters[`${this.namespace}/getFlashMessage`];
      }
    },

    methods: {

      closeFlash(){
        this.closed = true;
        this.message = null;
        if (this._timeout){
          clearTimeout(this._timeout);
        }
      },

      clearFlash(){
        this.$store.commit(CLEAR_FLASH);
        if( this.save ){
          this.storage.removeItem(this.key);
        }
      },

      autoClose(){
        this._timeout = setTimeout(() => {
          this.closeFlash();
        }, this.duration);
      }
    }
  };

}