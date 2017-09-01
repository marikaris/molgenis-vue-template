<template>
  <div class="input-group" id="search_items">
      <span class="input-group-addon">
        <i class="fa fa-search" aria-hidden="true"></i>
      </span>
    <input type="text" class="form-control" placeholder="Search for...">
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";
  #search_items{
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .input-group-addon{
    border-radius: 50px;
    background-color: $white;
  }
  .form-control{
    border-radius: 50px;
  }
</style>
<script>

  export default {
    name: 'search-box'
  }
</script>
