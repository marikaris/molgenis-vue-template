<template>
  <div class="form-check filter_checkbox" v-show="index<4 | showAll">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox">
      <div class="d-flex justify-content-between">
          <span v-if="label">{{label}}</span><span v-if="name">{{name}}</span>
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
    props: ['id', 'name', 'label', 'index', 'showAll']
  }
</script>
