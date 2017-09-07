<template>
  <div class="card biobank_card" @click="redirectToBiobankView">

    <div class="card-block">
      <div class="d-flex justify-content-between">
        <div>
          <h5>{{name}}</h5>
        </div>
        <div>
          <div v-for="key in keys">
            <small><b>{{key}}</b>: {{info[key]}}</small>
          </div>
        </div>
      </div>
    </div>

    <collection-overview
      filterKey=""
      :columns="['name', 'type', 'materials']"
      :data="info.collections">
    </collection-overview>

  </div>
</template>

<style lang="scss">
  @import "~variables";
  @import "~mixins";

  .biobank_card {
    background-color: $gray-lightest;
    margin-top: 1em;
  }

  .biobank_card:hover {
    cursor: pointer;
    cursor: hand;
  }
</style>

<script>
  import CollectionOverview from './CollectionOverview'

  export default {
    name: 'biobank',
    compounds: {CollectionOverview},
    props: ['name', 'info', 'keys'],
    methods: {
      redirectToBiobankView: function () {
        console.log(this.$router)
        this.$router.replace('/biobank/' + this.info.id)
      }
    }
  }
</script>
