<template>
  <div>
    <result v-for="result in results" :name="result.name" :info="result.info"></result>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";

</style>
<script>
  import Result from './Result'
  export default {
    name: 'results',
    components: {Result},
    data: function () {
      return {
        results: [
          {
            name: 'MedUni Wien Biobank',
            info: [
              {key: 'biobank_type', label: 'Biobank Type', value: 'Clinical, Research study, Human'},
              {key: 'juridical_person', label: 'Juridical Person', value: 'Medical University of Vienna'}
            ]
          },
          {
            name: 'Biobank Innsbruck',
            info: [
              {key: 'biobank_type', label: 'Biobank Type', value: 'Clinical, Research study, Human'},
              {key: 'juridical_person', label: 'Juridical Person', value: 'Medical University of Innsbruck'}
            ]
          },
          {
            name: 'Biobank @ UZ Brussel',
            info: [
              {key: 'biobank_type', label: 'Biobank Type', value: 'Clinical, Research study, Human'},
              {key: 'juridical_person', label: 'Juridical Person', value: 'Universitair Ziekenhuis Brussel'}
            ]
          }
        ]
      }
    }
  }
</script>
