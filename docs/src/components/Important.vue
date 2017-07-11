<template>
  <div class="stay-center">

    <div class="text-center center-flash">

      <h1>{{ message }}</h1>

      <flash-message important variant="info" transitionIn="animated tada"></flash-message>

          <br><br>
          <router-link class="btn btn-primary btn-sm back-btn" to="/">
        <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back
      </router-link>

    </div>

    <div class="text-center">
      <pre v-highlightjs><code class="html">
      {{ code }}
      </code></pre>
    </div>

  </div>
</template>


<script>

  export default {

    data(){
      return {
        message: 'Important flash message',
        code: '<flash-message important variant="info" transitionIn="animated tada"></flash-message>'
      };
    }

  };

</script>