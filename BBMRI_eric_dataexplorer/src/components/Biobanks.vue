<template>
  <div id="biobanks">
    <biobank v-if="biobank.collections.length > 0"
      v-for="biobank in biobanks"
      :key="biobank.id"
      :biobank="biobank">
    </biobank>
  </div>
</template>

<style lang="scss">
  @import "~variables";
  @import "~mixins";

  #biobanks {
    width: 100%;
    height: 80vh;
    overflow: auto;
  }
</style>

<script>
  import Biobank from './Biobank'
  import { mapGetters } from 'vuex'

  export default {
    name: 'biobanks',
    computed: {
      ...mapGetters({biobanks: 'getFilteredBiobanks'})
    },
    components: {Biobank}
  }
</script>
