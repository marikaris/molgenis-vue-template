<template>
  <div class="input-group" id="search_items">
    <input type="text" class="form-control" placeholder="Search for..." v-model="query" v-on:keyup.enter="submit(query)">
    <button class="btn btn-danger input-group-addon" @click="clear()">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
    <button class="btn btn-primary input-group-addon" @click="submit(query)">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";

  #search_items {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .input-group-addon {
    border-radius: 50px;
    background-color: $white;
  }

  .form-control {
    border-radius: 50px;
  }
</style>
<script>
  import { SET_SEARCH_QUERY, SET_SEARCH_CLICKED } from '../store/mutations'
  import { GET_COLLECTIONS } from '../store/actions'
  export default {
    name: 'search-box',
    computed: {
      query: {
        get: function () {
          return this.$store.state.filter.searchQuery
        },
        set: function (query) {
          this.$store.commit(SET_SEARCH_QUERY, query)
        }
      }
    },
    methods: {
      submit: function (query) {
        this.$store.commit(SET_SEARCH_CLICKED, true)
        this.$store.dispatch(GET_COLLECTIONS, {filter: this.$store.state.filter})
      },
      clear: function () {
        this.query = ''
        this.$store.commit(SET_SEARCH_CLICKED, false)
      }
    }
  }
</script>
