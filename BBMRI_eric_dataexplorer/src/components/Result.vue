<template>
  <div class="card biobank_card">
    <div class="card-block">
      <div class="d-flex justify-content-between">
        <div>
          <h5>{{name}}</h5>
        </div>
        <div>
          <div v-for="item in info">
            <small><b>{{item.label}}</b>: {{item.value}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";
  .biobank_card{
    background-color: $gray-lightest;
  }
</style>
<script>

  export default {
    name: 'filter-checkbox',
    props: ['name', 'info']
  }
</script>
