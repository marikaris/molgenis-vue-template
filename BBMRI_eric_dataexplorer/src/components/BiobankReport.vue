<template>
  <div><a href="/">< Back to search</a>
    <div class="card biobank_report">
      <div class="card-block">
        <h4>{{biobank.name}}</h4>
        <p>{{biobank.description}}</p>
        <p v-for="contact in biobank.contact">
          <b>Contact: </b>{{contact.email}}
        <p/>
      </div>
      <collapsable-pane paneTitle="More information" :excluded="['name', 'description', 'contact']"
                        :entity="biobank"></collapsable-pane>
      <div class="card-block">
        <h4>Collections</h4>
        <collection-overview filterKey="" :columns="['name', 'type', 'materials']" :data="collections">
        </collection-overview>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";

  .biobank_report {
    background-color: $gray-lightest;
    margin-top: 1em;
  }
</style>
<script>
  import { GET_BIOBANK, GET_COLLECTIONS } from '../store/actions'
  import CollapsablePane from './CollapsablePane'
  import CollectionOverview from './CollectionOverview'
  export default {
    name: 'biobank-report',
    components: {CollapsablePane, CollectionOverview},
    data: function () {
      return {
        biobankId: this.$route.params.id
      }
    },
    computed: {
      biobank: function get () {
        return this.$store.state.selectedBiobank
      },
      collections: function get () {
        return this.$store.state.collections.items
      }
    },
    mounted () {
      this.$store.dispatch(GET_BIOBANK, this.biobankId)
      this.$store.dispatch(GET_COLLECTIONS, {filter: {filters: []}, biobankId: this.biobankId})
    }
  }
</script>
