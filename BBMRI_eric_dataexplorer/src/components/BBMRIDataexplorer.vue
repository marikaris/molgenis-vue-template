<template>
  <div class="row">
    <div class="col-md-3" id="filter">
      <categorical-filter></categorical-filter>
    </div>
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md" id="plots">
            Here some stats
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" id="search">
            Search box here
          </div>
        </div>
        <div class="row">
          <div class="col-md" id="results">
            Here the data results
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CategoricalFilter from './CategoricalFilter'

  export default {
    name: 'bbmri-dataexplorer',
    components: {CategoricalFilter}
  }
</script>
