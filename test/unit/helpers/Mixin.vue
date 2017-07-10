<template>
  <div class="text-center" style="width: 400px; margin: 0 auto;">
    <h1 style="margin: 120px auto 20px auto;">{{ message }}</h1>
    <button type="button" class="btn btn-primary btn-lg same-size normal-flash-btn" @click="makeFlash" >Flash Me!</button><br><br>
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

    methods: {

      makeFlash(){
        this.flash({ message: 'I am the flash! B)', variant: 'danger' });
        this.$router.replace('/flash');
      },
      ...mapMutations({
        'flash': 'FLASH/SET_FLASH'
      })
    }
  };

</script>