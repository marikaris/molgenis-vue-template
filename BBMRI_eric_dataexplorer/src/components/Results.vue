<template>
  <div id="results">
    <result v-for="result in results" :key="result.name":name="result.name" :info="result" :keys="keys"></result>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";

  #results {
    width: 100%;
    height: 80vh;
    overflow: auto;
  }
</style>
<script>
  import Result from './Result'
  export default {
    name: 'results',
    components: {Result},
    computed: {
      results: function () {
        return this.$store.state.biobanks
      }
    },
    data: function () {
      return {
        keys: ['juridical_person']
      }
    }
  }
</script>
