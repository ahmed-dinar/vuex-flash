<template>

  <div>

    <div class="row main-header">
      <div class="container">
        <h1 :class="['text-center','flash-heading', animateMe ? 'animated swing' : '']">
        {{ message }}
        </h1>
        <p class="subtitle text-center">
          <i class="material-icons">flash_on</i> {{ subtitle }} <i class="material-icons">flash_on</i><br>
          <a style="margin-right: 5px;" href="https://github.com/ahmed-dinar/vuex-flash#install" target="_blank">
            <img src="https://img.shields.io/badge/docs--green.svg?style=social&maxAge=2592000" alt="documentation">
          </a>
          <a href="https://github.com/ahmed-dinar/vuex-flash" target="_blank">
            <img src="https://img.shields.io/github/stars/ahmed-dinar/vuex-flash.svg?style=social&label=Star&maxAge=2592000" alt="github">
          </a>
        </p>
      </div>
    </div>

    <div class="row">

      <div class="col-md-12">
        <h3 class="text-center">Basic Demo</h3>
        <hr>
      </div>

      <div class="col-md-5">

  <pre v-highlightjs><code class="javascript">  basic(){

    this.flash({
      message: 'Basic flash, you can close or refresh the page.',
      variant: 'danger'
    });

    this.$router.replace('/basic');
  }</code></pre>

  <pre v-highlightjs><code class="javascript">  autoHide(){

    this.flash({
      message: 'Will hide in a moment',
      variant: 'success'
    });

    this.$router.replace('/autohide');
  }</code></pre>

      </div>


      <div class="text-center col-md-2">

        <button type="button" class="btn btn-outline-danger btn-lg same-size normal-flash-btn" @click="basic" >
          Basic
        </button>
        <br><br>
        <button type="button" class="btn btn-outline-success btn-lg same-size auto-flash-btn" @click="autoHide" >
        Auto Hide
        </button><br><br>
        <button type="button" class="btn btn-outline-info btn-lg same-size important-flash-btn" @click="important" >
        Important
        </button><br><br>
        <button type="button" class="btn btn-outline-primary btn-lg same-size multiple-flash-btn" @click="multiple" >
        Multiple
        </button><br><br>

      </div>


      <div class="col-md-5">


  <pre v-highlightjs><code class="javascript">  important(){
    this.flash({
      message: "You can't close me! Unless you refresh the page.",
      variant: 'info'
    });
    this.$router.replace('/important');
  }</code></pre>

  <pre v-highlightjs><code class="javascript">  multiple(){
    this.flash({
      message: 'This is success variant message',
      variant: 'success'
    });

    this.flash({
      message: 'This is info variant message',
      variant: 'info'
    });

    this.flash({
      message: 'This is danger variant message & auto hide',
      variant: 'danger'
    });
    this.$router.replace('/multiple');
  }</code></pre>


      </div>
    </div>



  <div class="container">
    <div class="row">

      <div class="col-md-12">
        <div class="text-center">
          <h3>Custom Variant</h3>
          <hr>

          <button type="button" class="btn btn-outline-primary btn-lg same-size" @click="grey" >
            Grey
          </button>
          <br><br>
      </div></div><br>

    <div class="col-md-6">
  <pre style="width: 470px; margin: 0 auto;" v-highlightjs><code class="javascript"> //store.js
  export default new Vuex.Store({
    //..
    plugins: [
      createFlashStore({
        variants: ['grey']
      })
    ]
  });</code></pre>
    </div>


    <div class="col-md-6">
  <pre style="width: 470px; margin: 0 auto;" v-highlightjs><code class="javascript">
  //css
  .alert-grey{
    background-color: #9e9e9e;
    color: #fff;
  }
  </code></pre>
    </div>


   </div>
 </div><br>


  <div class="container">
    <div class="row">

      <div class="col-md-12">
        <div class="text-center">
          <h3>Custom Transition</h3>
          <hr>

          <button type="button" class="btn btn-outline-primary btn-lg same-size" @click="customTransition" >
            Fade
          </button><br>
          <a target="_blank" href="https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components">
            more
          </a>
          <br><br>
      </div></div><br>

    <div class="col-md-6">
  <pre style="width: 470px; margin: 0 auto;" v-highlightjs><code class="javascript">Vue.use(VuexFlash, {
  template: `{{ customTransitionTemplate }}`
});
</code></pre>
    </div>


    <div class="col-md-6">
  <pre style=" margin: 0 auto;" v-highlightjs><code class="javascript">
  //css
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0
  }
  </code></pre>
    </div><br>


  <div class="col-md-12">
    <div class="text-center"><br>
  <button type="button" class="btn btn-outline-primary btn-lg same-size" @click="noTransition" >
  No transition
  </button>
    </div><br>

<pre style="width: 470px; margin: 0 auto;" v-highlightjs><code class="javascript">Vue.use(VuexFlash, {
  template: `{{ customNoTransition }}`
});
</code></pre>

  </div><br><br>




   </div>
 </div><br>






    <div class="row">
      <div class="col-md-12">

        <div class="text-center">
          <h3>Custom Templates</h3>
          <hr>

          <button type="button" class="btn btn-outline-primary btn-lg same-size" @click="bulma" >
            Bulma
          </button><br>
          <a href="http://bulma.io/" target="_blank">Website</a>
        </div>

  <pre style="width: 470px; margin: 0 auto;" v-highlightjs><code class="javascript">
    Vue.use(VuexFlash, {
      template: `{{ bulmaTemplate }}`,
      css: ['notification'],
      variantClass: function(){
        return `is-${this.variant}`;
      }
    });
  </code></pre><br>

        <div class="text-center">
          <button type="button" class="btn btn-outline-primary btn-lg same-size" @click="uikit" >
            uikit
          </button><br>
          <a href="https://getuikit.com/" target="_blank">Website</a>
        </div>

  <pre style="width: 470px; margin: 0 auto;" v-highlightjs><code class="javascript">
    Vue.use(VuexFlash, {
      template: `{{ uikitTemplate }}`,
      css: ['uk-alert'],
      variantClass: function(){
        return `uk-alert-${this.variant}`;
      }
    });
  </code></pre><br>

   </div>
    </div>




  <hr>

    <div class="container footer">
      <div class="text-center">
          <p class="text-center">© Ahmed Dinar, 2017</p>
      </div>
    </div>

  </div>
</template>


<script>

  import templates from '../lib/templates';

  export default {

    data(){
      return {
        message: 'Vuex Flash',
        subtitle: 'Flash Message Component for Vue.js within Vuex',
        animateMe: false,
        bulmaTemplate: templates.bulma.template(),
        uikitTemplate: templates.uikit.template(),
        customTransitionTemplate: templates.transition.custom,
        customNoTransition: templates.transition.none
      };
    },

    methods: {

      basic(){
       // this.flash({ message: 'Basic flash, you can close or refresh the page.', variant: 'danger' });
        this.$store.commit('FLASH/SET_FLASH', { message: 'some message', variant: 'danger' });
        this.$router.replace('/basic');
      },

      autoHide(){
        this.flash({ message: 'Will hide in a moment', variant: 'success' });
        this.$router.replace('/autohide');
      },

      important(){
        this.flash({ message: 'You can\'t close me! Unless you refresh the page.', variant: 'info' });
        this.$router.replace('/important');
      },

      multiple(){
        this.flash({ message: 'This is success variant message', variant: 'success' });
        this.flash({ message: 'This is info variant message', variant: 'info' });
        this.flash({ message: 'This is danger variant message & auto hide', variant: 'danger' });
        this.$router.replace('/multiple');
      },

      bulma(){
        this.flash({ message: 'Bulma success message', variant: 'bulma_success' });
        this.$router.replace('/bulma');
      },

      uikit(){
        this.flash({ message: 'Uikit example', variant: 'uikit_danger' });
        this.$router.replace('/uikit');
      },

      grey(){
        this.flash({ message: 'Custom variant Grey flash', variant: 'grey' });
        this.$router.replace('/grey');
      },
      customTransition(){
        this.flash({ message: 'Custom transition', variant: 'success' });
        this.$router.replace('/transition');
      },
      noTransition(){
        this.flash({ message: 'No transition', variant: 'success' });
        this.$router.replace('/notransition');
      }
    },

    mounted(){
      this.animateMe = true;
    }

  };

</script>
