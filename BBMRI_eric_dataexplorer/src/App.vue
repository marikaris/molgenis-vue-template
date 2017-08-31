<template>
  <div class="container">
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
  @import "~variables";
  @import "~mixins";

  #app {
    background-color: $white;
    text-align: left!important;

  }
</style>

<script>
  export default {
    name: 'molgenis-app'
  }
</script>
