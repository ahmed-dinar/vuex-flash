<template>
  <div class="text-center" style="width: 700px; margin: 0 auto;">

    <h1 style="margin: 120px auto 20px auto;">{{ message }}</h1>

    <flash-message autoHide variant="success" transitionIn="animated rubberBand" transitionOut="animated rollOut"></flash-message>

        <br><br>
    <router-link class="btn btn-primary btn-sm back-btn" to="/">Go Back Home</router-link>

  </div>
</template>


<script>

  export default {

    data(){
      return {
        message: 'In another page with auto hide flash!'
      };
    },

    mounted(){

    },

    methods: {


    }

  };

</script>