<template>
  <div class="card filter_option">
    <h5 class="card-header" @click="showOptions">
      <i class="fa fa-caret-up" aria-hidden="true" v-if="showContent"></i>
      <i class="fa fa-caret-down" aria-hidden="true" v-else></i>
      {{name}}
    </h5>
    <div class="card-block" v-show="showContent">
      <filter-checkbox v-for="option in options"
                       :key="option.id"
                       :id="option.id"
                       :label="option.label"
                       :name="option.name">

      </filter-checkbox>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";

  .filter_option {
    background-color: inherit;

  }
</style>
<script>
  import FilterCheckbox from './FilterCheckbox'

  export default {
    name: 'filter-option',
    props: ['name', 'options'],
    components: {FilterCheckbox},
    data: function () {
      return {
        showContent: false
      }
    },
    methods: {
      showOptions () {
        this.showContent = !this.showContent
        return this.showContent
      }
    }

  }
</script>
