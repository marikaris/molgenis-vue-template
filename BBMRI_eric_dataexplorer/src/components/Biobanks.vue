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
  export default {
    name: 'biobanks',
    components: {Biobank},
    computed: {
      results: function () {
        let filterSet = (this.$store.state.filter.filters.diagnosis.selectedOptions.length +
                          this.$store.state.filter.filters.material_types.selectedOptions.length +
                          this.$store.state.filter.filters.quality.selectedOptions.length) > 0 |
                          this.$store.state.filter.isSearchClicked
        let filteredBiobanks = []
        let biobanks = this.$store.state.biobanks.items
        if (filterSet) {
          let selection = new Set()
          let collections = this.$store.state.collections.items
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
