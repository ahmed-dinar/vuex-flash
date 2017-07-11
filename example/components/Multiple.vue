<template>
  <div class="text-center" style="width: 600px; margin: 0 auto;">

    <h1 style="margin: 120px auto 20px auto;">{{ message }}</h1>

    <flash-message variant="success" transitionIn="animated swing"></flash-message>
    <flash-message variant="info" transitionIn="animated lightSpeedIn"></flash-message>
    <flash-message variant="danger" autoHide transitionIn="animated flipInX" transitionOut="animated flipOutX"></flash-message>

    <br><br>
    <router-link class="btn btn-primary btn-sm back-btn" to="/">Go Back Home</router-link>

  </div>
</template>


<script>

  export default {

    data(){
      return {
        message: 'In another page with multiple flash!'
      };
    },

    mounted(){

    },

    methods: {


    }

  };

</script>