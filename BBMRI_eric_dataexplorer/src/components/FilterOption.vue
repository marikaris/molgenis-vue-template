<template>
  <div class="card filter_option">
    <h5 class="card-header" @click="toggleOptions">
      <i class="fa fa-caret-up" aria-hidden="true" v-if="showContent"></i>
      <i class="fa fa-caret-down" aria-hidden="true" v-else></i>
      {{name}}
    </h5>
    <div class="card-block" v-show="showContent">
      <filter-checkbox v-for="(option, index) in options"
                       :key="option.id"
                       :id="option.id"
                       :label="option.label"
                       :name="option.name"
                       :index="index"
                       :showAll="showAllContent">

      </filter-checkbox>
      <p class="text-right" v-if="options.length > 5" v-show="!showAllContent"><a href="#" @click="toggleAllOptions">
        <small><i><i class="fa fa-caret-down" aria-hidden="true"></i> Show more</i></small>
      </a></p>
      <p class="text-right" v-if="options.length > 5" v-show="showAllContent"><a href="#" @click="toggleAllOptions">
        <small><i><i class="fa fa-caret-up" aria-hidden="true"></i> Show less</i></small>
      </a></p>
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
        showContent: false,
        showAllContent: false
      }
    },
    methods: {
      toggleOptions () {
        this.showContent = !this.showContent
        return this.showContent
      },
      toggleAllOptions () {
        this.showAllContent = !this.showAllContent
        return this.showAllContent
      }
    }

  }
</script>
