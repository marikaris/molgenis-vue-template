<template>
  <div class="card">
    <h3 class="card-header" @click="showOptions">
      <i class="fa fa-chevron-up" aria-hidden="true" v-if="showContent"></i>
      <i class="fa fa-chevron-down" aria-hidden="true" v-else></i>
      Primary site
    </h3>
    <div class="card-block" v-show="showContent">
      <filter-checkbox name="blood" label="Blood"></filter-checkbox>
      <filter-checkbox name="breast" label="Breast"></filter-checkbox>
    </div>
  </div>
</template>
<script>
  import FilterCheckbox from './FilterCheckbox'

  export default {
    name: 'filter-option',
    components: {FilterCheckbox},
    data: function () {
      return {
        showContent: false
      }
    },
    methods: {
      showOptions () {
        console.log(this.showContent)
        this.showContent = !this.showContent
        return this.showContent
      }
    }

  }
</script>
