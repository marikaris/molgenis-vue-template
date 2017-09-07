<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
        {{ key | capitalize }}
        <i class="fa fa-caret-up" aria-hidden="true" v-if="sortOrders[key] > 0"></i>
        <i class="fa fa-caret-down" aria-hidden="true" v-else></i>
      </th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="entry in filteredcollections">
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
    props: ['columns', 'filterKey', 'collections'],
    data: function () {
      const sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })

      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredcollections: function () {
        const sortKey = this.sortKey
        const filterKey = this.filterKey && this.filterKey.toLowerCase()
        const order = this.sortOrders[sortKey] || 1
        let collections = this.collections

        if (filterKey) {
          collections = collections.filter(function (collection) {
            return Object.keys(collection).some(function (key) {
              return String(collection[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }

        if (sortKey) {
          collections = collections.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }

        const materialTypeFilters = this.$store.state.filters.material_types.selectedOptions
        const qualityFilters = this.$store.state.filters.quality.selectedOptions

        return collections.filter(collection => {
          if (materialTypeFilters.length === 0 && qualityFilters.length === 0) {
            return true
          }

          const collectionsContainingMaterial = collection.materials.find(collectionMaterial => {
            return materialTypeFilters.includes(collectionMaterial.id)
          })

          const collectionsContainingQuality = collection.standards.find(collectionStandard => {
            return qualityFilters.includes(collectionStandard.id)
          })

          return (materialTypeFilters.length > 0 && qualityFilters.length === 0 && !!collectionsContainingMaterial) ||
            (materialTypeFilters.length === 0 && qualityFilters.length > 0 && !!collectionsContainingQuality) ||
            (!!collectionsContainingMaterial && !!collectionsContainingQuality)
        })
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
