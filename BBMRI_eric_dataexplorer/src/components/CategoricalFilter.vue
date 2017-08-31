<template>
  <div class="card" id="categorical_filter">
    <p class="card-text text-left">
      <filter-option v-for="filter in filters" :name="filter.filter" :options="filter.options"></filter-option>
    </p>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";

  #categorical_filter {
    background-color: $gray-lightest;

  }
</style>
<script>
  import FilterOption from './FilterOption'

  export default {
    name: 'categorical-filter',
    data: function () {
      return {
        filters: [
          {filter: 'Primary site', options: ['Blood', 'Breast', 'Brain', 'Liver', 'Head and neck', 'Foot', 'Toe']},
          {filter: 'Project', options: ['Project1', 'Project2']},
          {filter: 'Study', options: ['Study1', 'Study2']},
          {filter: 'Gender', options: ['Male', 'Female', 'No data']}]
      }
    },
    components: {
      FilterOption
    }
  }
</script>
