export default {
  /**
   *
   * @param state
   */
  getSelectedBiobank: state => state.selectedBiobank ? state.selectedBiobank : {},
  /**
   *
   * @param state
   * @returns {Array}
   */
  getFilteredBiobanks: function (state) {
    let biobanks

    const countryFilters = state.filters.countries.selectedOptions
    const materialTypeFilters = state.filters.material_types.selectedOptions
    const qualityFilters = state.filters.quality.selectedOptions

    if (countryFilters.length > 0) {
      biobanks = state.biobanks.items.filter(biobank => {
        return countryFilters.includes(biobank.country.id)
      })
    } else {
      biobanks = state.biobanks.items
    }

    if (materialTypeFilters.length === 0 && qualityFilters === 0) {
      return biobanks
    }

    if (materialTypeFilters.length > 0 || qualityFilters.length > 0) {
      biobanks = biobanks.filter(biobank => {
        const collections = biobank.collections

        const filteredCollections = collections.filter(collection => {
          const collectionContainsMaterial = collection.materials.find(collectionMaterial => {
            return materialTypeFilters.includes(collectionMaterial.id)
          })

          const collectionContainsQuality = collection.standards.find(collectionStandard => {
            return qualityFilters.includes(collectionStandard.id)
          })

          return (materialTypeFilters.length > 0 && qualityFilters.length === 0 && !!collectionContainsMaterial) ||
            (materialTypeFilters.length === 0 && qualityFilters.length > 0 && !!collectionContainsQuality) ||
            (!!collectionContainsMaterial && !!collectionContainsQuality)
        })

        return filteredCollections.length > 0
      })
    }
    return biobanks
  }
}
