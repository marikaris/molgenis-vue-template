<template>
  <div id="results">
    <biobank v-for="result in results" :key="result.id" :name="result.name" :info="result" :keys="keys"></biobank>
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
  import Biobank from './Biobank'
  import { mapGetters } from 'vuex'
  import { GET_COLLECTIONS } from '../store/actions'

  export default {
    name: 'biobanks',
    components: {Biobank},
    computed: {
      ...mapGetters({results: 'getFilteredBiobanks'})
    },
    data: function () {
      return {
        keys: ['juridical_person']
      }
    },
    created: function () {
      this.$store.dispatch(GET_COLLECTIONS, {filter: this.$store.state.filter})
    }
  }
</script>
