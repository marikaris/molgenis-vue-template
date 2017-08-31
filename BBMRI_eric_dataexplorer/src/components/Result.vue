<template>
  <div class="card" id="results">
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

  #results {
    width: 100%;
  }
</style>
<script>

  export default {
    name: 'filter-checkbox',
    props: ['name', 'info']
  }
</script>
