<template>
  <div>
    <div class="card biobank_card">
      <div class="card-header">
        <div class="card-block biobank_header" @click="redirectToBiobankView">
          <div class="d-flex justify-content-between">
            <div>
              <h5>{{biobank.name}}</h5>
            </div>
            <div>
              <div v-for="key in keys">
                <small><b>{{key}}</b>: {{biobank[key]}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <collection-overview
        filterKey=""
        :columns="['name', 'type', 'materials', 'standards']"
        :collections="biobank.collections">
      </collection-overview>
    </div>
  </div>
</template>

<style lang="scss">
  @import "~variables";
  @import "~mixins";

  .biobank_card {
    margin-top: 1em;
  }

  .biobank_header:hover {
    cursor: pointer;
    cursor: hand;
  }
</style>

<script>
  import CollectionOverview from './CollectionOverview'

  export default {
    name: 'biobank',
    props: ['biobank'],
    data: function () {
      return {
        keys: ['juridical_person']
      }
    },
    methods: {
      redirectToBiobankView: function () {
        console.log(this.$router)
        this.$router.replace('/biobank/' + this.biobank.id)
      }
    },
    components: {CollectionOverview}
  }
</script>
