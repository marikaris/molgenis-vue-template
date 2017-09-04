<template>
  <div class="card" id="categorical_filter">
    <p class="card-text">
      <filter-option v-for="filter in filters" :key="filter.filter" :name="filter.filter" :options="filter.options"></filter-option>
    </p>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";
  #categorical_filter {
    background-color: $gray-lightest;
    height: 100%
  }
</style>
<script>
  import FilterOption from './FilterOption'
  import { GET_BIOBANKS, GET_COUNTRIES } from '../store/actions'

  export default {
    name: 'categorical-filter',
    data: function () {
      console.log(this.$store.state.countries, 'countries')
      return {
        filters: this.$store.state.filters
      }
    },
    components: {
      FilterOption
    },
    mounted () {
      this.$store.dispatch(GET_BIOBANKS)
      console.log('1. get countries')
      this.$store.dispatch(GET_COUNTRIES)
      console.log('2. get countries')
    }
  }
</script>
