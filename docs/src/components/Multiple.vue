<template>
  <div class="stay-center">
    <div class="text-center center-flash">

      <h1>{{ message }}</h1>

      <flash-message variant="success" transitionIn="animated swing"></flash-message>
      <flash-message variant="info" transitionIn="animated lightSpeedIn"></flash-message>
      <flash-message variant="danger" autoHide transitionIn="animated flipInX" transitionOut="animated flipOutX"></flash-message>

      <br><br>
      <router-link class="btn btn-primary btn-sm back-btn" to="/">
        <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back
      </router-link>

    </div>

    <div class="text-center">
      <pre v-highlightjs><code class="html">{{ code }}
      </code></pre>
    </div>

  </div>
</template>


<script>

  export default {

    data(){
      return {
        message: 'Multiple flash messages',
        code: `
     <flash-message variant="success" transitionIn="animated swing"></flash-message>
     <flash-message variant="info" transitionIn="animated lightSpeedIn"></flash-message>
     <flash-message variant="danger" autoHide transitionIn="animated flipInX" transitionOut="animated flipOutX"></flash-message>`
      };
    }
  };

</script>