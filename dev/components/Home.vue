<template>
  <div class="text-center" style="width: 400px; margin: 0 auto;">
    <h1 style="margin: 120px auto 20px auto;">{{ message }}</h1>
    <button type="button" class="btn btn-primary btn-lg same-size" @click="makeFlash" >Flash Me!</button><br><br>
    <button type="button" class="btn btn-primary btn-lg same-size" @click="flashAutoHide" >I am Auto Hide!</button><br><br>
    <button type="button" class="btn btn-primary btn-lg same-size" @click="flashImportant" >Important Flash!</button><br><br>
  </div>
</template>


<script>

  import { mapMutations } from 'vuex';

  export default {

    data(){
      return {
        message: 'Vuex Flash'
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

      ...mapMutations({
        flash: 'FLASH/SET_FLASH'
      })

    }

  };

</script>