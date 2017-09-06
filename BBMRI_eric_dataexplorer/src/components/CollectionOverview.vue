<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }">
        {{ key | capitalize }}
        <i class="fa fa-caret-up" aria-hidden="true" v-if="sortOrders[key] > 0"></i>
        <i class="fa fa-caret-down" aria-hidden="true" v-else></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="entry in filteredData">
      <td v-for="key in columns">
        <span v-if="key==='name'">{{entry[key]}}</span>
        <ul v-else>
          <li v-for="info in entry[key]">{{info.label}}</li>
        </ul>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";
  th.active {
    color: $blue;
  }

  th.active .arrow {
    opacity: 1;
  }
</style>
<script>
  export default {
    name: 'collection-overview',
    props: ['columns', 'filterKey'],
    data: function () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.data
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      },
      data: function get () {
        return this.$store.state.collections.items
      }
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      }
    }
  }
</script>
