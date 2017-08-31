<template>
  <div class="form-check filter_checkbox">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox">
      <div class="d-flex justify-content-between">
        <div>
          {{label}}
        </div>
        <div>
          {{total}}
        </div>
      </div>
    </label>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";
  .form-check-label{
    width: 100%;
  }
  .filter_checkbox {
    background-color: $white;
    padding: 0.3em;

  }
</style>
<script>

  export default {
    name: 'filter-checkbox',
    props: ['name', 'label', 'total']
  }
</script>
