

var defaultVariants = ['success','warning','danger','info'];

function makeVariants(framework){
  return defaultVariants.map(variant => `${framework}_${variant}`);
}

export default{

  bulma: {
    template(){
      return `
        <transition
        :name="transitionName"
        :enter-active-class="transitionIn"
        :leave-active-class="transitionOut"
        >
          <div v-if="show"
          :class="cssClasses"
          >
            <button v-if="!important"
            class="delete"
            @click.stop.prevent="closeFlash"
            >
            </button>

            {{ message }}

          </div>

        </transition>`;
    },
    variants(){
      return makeVariants('bulma');
    },
    variantClass(){
      return function(){
        return `is-${this.variant.split('_')[1]}`;
      };
    }
  },

  uikit: {
    template(){
      return `
        <transition
        :name="transitionName"
        :enter-active-class="transitionIn"
        :leave-active-class="transitionOut"
        >

          <div v-if="show"
          :class="cssClasses"
          uk-alert
          >
            <button v-if="!important"
            class="uk-alert-close uk-close"
            @click.stop.prevent="closeFlash"
            >
            </button>

            {{ message }}

          </div>

        </transition>`;
    },
    variants(){
      return makeVariants('uikit');
    },
    variantClass(){
      return function(){
        return `uk-alert-${this.variant.split('_')[1]}`;
      };
    }
  },

  semanticui: {
    template(){
      return `
        <transition
        :name="transitionName"
        :enter-active-class="transitionIn"
        :leave-active-class="transitionOut"
        >

          <div v-if="show"
          :class="cssClasses"
          >
            <i v-if="!important"
            @click.stop.prevent="closeFlash"
            class="close icon"
            ></i>
            {{ message }}
          </div>

        </transition>`;
    },
    variants(){
      return makeVariants('semanticui');
    },
    variantClass(){
      return function(){
        return this.variant.split('_')[1];
      };
    }
  }

};