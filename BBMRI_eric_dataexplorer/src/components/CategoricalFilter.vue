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
  import { GET_BIOBANKS } from '../store/actions'

  export default {
    name: 'categorical-filter',
    data: function () {
      return {
        filters: [
          {
            filter: 'Country',
            options: [
              {label: 'Austria', name: 'blood', total: 2826},
              {label: 'Belgium', name: 'breast', total: 1976},
              {label: 'Czech Republic', name: 'brain', total: 1745},
              {label: 'Liver', name: 'liver', total: 1549},
              {label: 'Head and neck', name: 'head_and_neck', total: 1345},
              {label: 'Foot', name: 'foot', total: 1234},
              {label: 'Toe', name: 'toe', total: 1098}]
          },
          {
            filter: 'Project',
            options: [
              {label: 'project1', name: 'blood', total: 5023},
              {label: 'project2', name: 'breast', total: 3456},
              {label: 'project3', name: 'brain', total: 2345}
            ]
          },
          {
            filter: 'Study',
            options: [
              {label: 'study1', name: 'blood', total: 5023},
              {label: 'study2', name: 'breast', total: 3456},
              {label: 'study3', name: 'brain', total: 2345}]
          },
          {
            filter: 'Gender',
            options: [{label: 'Male', name: 'm', total: 2826},
              {label: 'Female', name: 'f', total: 1976},
              {label: 'No data', name: 'nd', total: 1745}]
          }]
      }
    },
    components: {
      FilterOption
    },
    mounted () {
      this.$store.dispatch(GET_BIOBANKS)
    }
  }
</script>
