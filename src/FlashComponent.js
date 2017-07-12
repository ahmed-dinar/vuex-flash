/**
 * Copyright (C) 2017 Ahmed Dinar
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
    //<String> the name used for registering vuex module
    namespace = 'FLASH',
    //<Number> duration of auto close flash message (in milliseconds)
    duration = 3000,
    //<String> template to use display flash
    template = defaultTemplate,
    //<Boolean> if false then clear persisted storage every time
    keep = true,
    //<Storage> persistant storage
    storage = null,
    //<String> persistant storage key
    key = '__vuexFlash',
    //<Array> custom css classes for template
    css = null,
    //returns a variant css class name based on current variant
    variantClass = function(){
      return `alert-${this.variant}`;
    },
    //use to clear the parsisted data from storage
    clearPersisted = function(){
      this.storage.removeItem(this.key);
    }
  } = {}
) {

  if( !keep && !storage ){
    storage = window && window.sessionStorage;
  }

  return {
    template,
    props: {
      variant: {
        type: String,
        required: true
      },
      important: {
        type: Boolean,
        default: false
      },
      autoHide: {
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
        closed: false,
        _timeout: null
      }, { namespace, key, duration, storage, css, keep });
    },
    mounted() {
      let flashMsg = this.getFlash();

      if( flashMsg ){
        this.message = flashMsg;
        this.clearFlash();
        if( this.autoHide ){
          this.autoClose();
        }
      }
    },
    computed: {
      variantClass,
      cssClasses(){
        return this.css && Array.isArray(this.css)
          ? [ ...this.css, this.variantClass ]
          : [ 'alert', this.variantClass ];
      },
      show(){
        return ! this.closed && !! this.message;
      },
      cleaner(){
        return `${this.namespace}/CLEAR_FLASH`;
      }
    },
    methods: {
      clearPersisted,
      getter(name){
        return `${this.namespace}/${name}`;
      },
      getFlash(){
        return this.$store.getters[this.getter('getFlashMessage')](this.variant);
      },
      closeFlash(){
        this.closed = true;
        this.message = null;

        if (this._timeout){
          clearTimeout(this._timeout);
        }
      },
      // check if all flash messages have been flashed when use persist data and keep = false
      // usefull when there are multiple flashes and have to clear persist storage every time
      flashed(){
        return this.$store.getters[this.getter('flashed')];
      },
      clearFlash(){
        this.$store.commit(this.cleaner, this.variant);

        if( !this.keep && this.flashed() ){
          this.clearPersisted();
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