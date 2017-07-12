<template>

  <div>

    <div class="row main-header">
      <div class="container">
        <h1 :class="['text-center','flash-heading', animateMe ? 'animated swing' : '']">
        {{ message }}
        </h1>
        <p class="subtitle text-center">
          <i class="material-icons">flash_on</i> {{ subtitle }} <i class="material-icons">flash_on</i>
        </p>
      </div>
    </div>

    <div class="row">

      <div class="col-md-5">

  <pre v-highlightjs><code class="javascript">basic(){

    this.flash({
      message: 'Basic flash, you can close or refresh the page.',
      variant: 'danger'
    });

    this.$router.replace('/basic');
  }</code></pre>

  <pre v-highlightjs><code class="javascript">autoHide(){
    import UIkit from 'uikit';
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


  <pre v-highlightjs><code class="javascript">important(){
    this.flash({
      message: "You can't close me! Unless you refresh the page.",
      variant: 'info'
    });
    this.$router.replace('/important');
  }</code></pre>

  <pre v-highlightjs><code class="javascript">multiple(){
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


    <hr class="style-one" />

    <div class="row">

    </div>

    <div class="container footer">
      <div class="text-center">
          <p class="text-center">© Ahmed Dinar, 2017</p>
      </div>
    </div>

  </div>
</template>


<script>

  export default {

    data(){
      return {
        message: 'Vuex Flash',
        subtitle: 'Flash Message Component for Vue.js within Vuex',
        animateMe: false
      };
    },

    methods: {

      basic(){
        this.flash({ message: 'Basic flash, you can close or refresh the page.', variant: 'danger' });
        this.flash({ message: 'BULMA!', variant: 'bulma_success' });
        this.flash({ message: 'UIKIT!', variant: 'uikit_primary' });
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
      }
    },

    mounted(){
      this.animateMe = true;
    }

  };

</script>
