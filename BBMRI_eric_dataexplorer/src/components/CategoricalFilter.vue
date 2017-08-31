<template>
  <div class="row">
    <div class="col text-center">
      <div class="card">
        <p class="card-text">
          <filter-option></filter-option>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import FilterOption from './FilterOption'

  export default {
    name: 'categorical-filter',
    components: { FilterOption }
  }
</script>
