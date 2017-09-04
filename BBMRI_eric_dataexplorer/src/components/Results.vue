<template>
  <div id="results">
    <result v-for="result in results" :key="result.id" :name="result.name" :info="result" :keys="keys"></result>
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
        let filterSet = (this.$store.state.filters.diagnosis.selectedOptions.length +
                          this.$store.state.filters.material_types.selectedOptions.length +
                          this.$store.state.filters.quality.selectedOptions.length) > 0
        let filteredBiobanks = []
        let biobanks = this.$store.state.biobanks
        if (filterSet) {
          let selection = new Set()
          let collections = this.$store.state.collections
          collections.map(function (collection) {
            selection.add(collection.biobank.id)
          })
          filteredBiobanks = biobanks.filter(function (biobank) {
            return selection.has(biobank.id)
          })
        } else {
          filteredBiobanks = biobanks
        }
        return filteredBiobanks
      }
    },
    data: function () {
      return {
        keys: ['juridical_person']
      }
    }
  }
</script>
