<template>
  <div class="stay-center">

    <div class="text-center center-flash">

      <h1>{{ message }}</h1>

      <uikit-flash variant="uikit_danger"></uikit-flash>

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
        message: 'Bulma using custom template',
        code: '<flash-message variant="danger"></flash-message>'
      };
    }

  };

</script>