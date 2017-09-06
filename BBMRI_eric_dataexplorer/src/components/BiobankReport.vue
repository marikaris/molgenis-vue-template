<template>
  <div class="card biobank_report">
    <div class="card-block">
      <h4>{{biobank.name}}</h4>
      <p>{{biobank.description}}</p>
      <p v-for="contact in biobank.contact">
        <b>Contact: </b>{{contact.email}}
      <p/>
    </div>
    <collapsable-pane paneTitle="More information" :excluded="['name', 'description', 'contact']" :entity="biobank"></collapsable-pane>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";
  .biobank_report{
    background-color: $gray-lightest;
    margin-top: 1em;
  }
</style>
<script>
  import { GET_BIOBANK } from '../store/actions'
  import CollapsablePane from './CollapsablePane'
  export default {
    name: 'biobank-report',
    components: {CollapsablePane},
    data: function () {
      return {
        biobankId: this.$route.params.id
      }
    },
    computed: {
      biobank: function get () {
        return this.$store.state.selectedBiobank
      }
    },
    mounted () {
      this.$store.dispatch(GET_BIOBANK, this.biobankId)
    }
  }
</script>
