<template>
  <div class="text-center" style="width: 600px; margin: 0 auto;">

    <h1 style="margin: 120px auto 20px auto;">{{ message }}</h1>

    <flash-message important transitionIn="animated tada"></flash-message>

        <br><br>
    <router-link class="btn btn-primary btn-sm" to="/">Go Back Home</router-link>

  </div>
</template>


<script>

  export default {

    data(){
      return {
        message: 'In another page with very important flash!'
      };
    },

    mounted(){

    },

    methods: {


    }

  };

</script>