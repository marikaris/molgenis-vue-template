<template>
  <div class="card" id="categorical_filter">
    <p class="card-text">
      <categorical-filter v-for="(filter, id) in filters" :key="filter.filter" :name="filter.filter" :options="filter.options" :id="id"></categorical-filter>
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
  import CategoricalFilter from './CategoricalFilter'
  import { GET_BIOBANKS, GET_COLLECTIONS, GET_COUNTRIES, GET_MATERIAL_TYPES, GET_QUALITY } from '../store/actions'

  export default {
    name: 'filters',
    data: function () {
      return {
        filters: this.$store.state.filter.filters
      }
    },
    components: {
      CategoricalFilter
    },
    mounted () {
      this.$store.dispatch(GET_BIOBANKS, this.$store.state.filter.filters.countries.selectedOptions)
      this.$store.dispatch(GET_COLLECTIONS, this.$store.state.filter)
      this.$store.dispatch(GET_COUNTRIES)
      this.$store.dispatch(GET_MATERIAL_TYPES)
      this.$store.dispatch(GET_QUALITY)
    }
  }
</script>
