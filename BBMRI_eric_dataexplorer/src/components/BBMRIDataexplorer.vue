<template>
  <div class="row">
    <div class="col-md-3" id="filters">
      <filters></filters>
    </div>
    <div class="col-md-9">
      <div class="row">
        <div class="col-md" id="plots">
          Here some stats
        </div>
      </div>
      <div class="row">
        <div class="col-md-12" id="search">
          <search-box></search-box>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12" id="results">
          <biobanks></biobanks>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Filters from './Filters'
  import Biobanks from './Biobanks'
  import SearchBox from './SearchBox'
  import {
    GET_COUNTRIES,
    GET_MATERIAL_TYPES,
    GET_QUALITY,
    GET_BIOBANKS_AND_COLLECTIONS
  } from '../store/actions'

  export default {
    name: 'bbmri-dataexplorer',
    components: {Filters, Biobanks, SearchBox},
    mounted () {
      this.$store.dispatch(GET_BIOBANKS_AND_COLLECTIONS)
      this.$store.dispatch(GET_COUNTRIES)
      this.$store.dispatch(GET_MATERIAL_TYPES)
      this.$store.dispatch(GET_QUALITY)
    }
  }
</script>
