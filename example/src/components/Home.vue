<template>
  <div class="text-center" style="width: 400px; margin: 0 auto;">
    <h1 style="margin: 120px auto 20px auto;">{{ message }}</h1>
    <button type="button" class="btn btn-primary btn-lg same-size normal-flash-btn" @click="makeFlash" >Flash Me!</button><br><br>
    <button type="button" class="btn btn-primary btn-lg same-size auto-flash-btn" @click="flashAutoHide" >I am Auto Hide!</button><br><br>
    <button type="button" class="btn btn-primary btn-lg same-size important-flash-btn" @click="flashImportant" >Important Flash!</button><br><br>
    <button type="button" class="btn btn-primary btn-lg same-size multiple-flash-btn" @click="flashMultiple" >Multiple Flash!</button><br><br>
  </div>
</template>


<script>

  import { mapMutations } from 'vuex';

  export default {

    data(){
      return {
        message: 'Example of Vuex Flash'
      };
    },

    mounted(){

    },

    methods: {

      makeFlash(){
        this.flash({ message: 'I am the flash! B)', variant: 'danger' });
        this.$router.replace('/flash');
      },

      flashAutoHide(){
        this.flash({ message: 'I will hide soon!', variant: 'success' });
        this.$router.replace('/autohide');
      },

      flashImportant(){
        this.flash({ message: 'You can\'t hide me! really?', variant: 'info' });
        this.$router.replace('/important');
      },

      flashMultiple(){
        this.flash({ message: 'We are multiple flash!', variant: 'success' });
        this.flash({ message: 'Yeh bro!', variant: 'info' });
        this.flash({ message: 'I am gonna hide bro!', variant: 'danger' });
        this.$router.replace('/multiple');
      },

      ...mapMutations({
        flash: 'FLASH/SET_FLASH'
      })

    }

  };

</script>