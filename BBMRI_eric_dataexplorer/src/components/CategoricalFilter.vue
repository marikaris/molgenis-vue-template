<template>
  <div class="card" id="categorical_filter">
    <p class="card-text">
      <filter-option v-for="filter in filters" :name="filter.filter" :options="filter.options"></filter-option>
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
      return {
        filters: [
          {
            filter: 'Country',
            options: this.$store.state.countries
          },
          {
            filter: 'Project',
            options: [
            ]
          },
          {
            filter: 'Study',
            options: [
              {id: 'study1', label: 'blood'},
              {id: 'study2', label: 'breast'},
              {id: 'study3', label: 'brain'}]
          },
          {
            filter: 'Gender',
            options: [{label: 'Male', id: 'm'},
              {label: 'Female', id: 'f'},
              {label: 'No data', id: 'nd'}]
          }]
      }
    },
    components: {
      FilterOption
    },
    mounted () {
      this.$store.dispatch(GET_BIOBANKS)
      this.$store.dispatch(GET_COUNTRIES)
    }
  }
</script>
