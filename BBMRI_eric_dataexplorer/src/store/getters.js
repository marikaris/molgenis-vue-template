export default {
  getCollections: state => state.collections ? state.collections : [],
  getBiobanks: state => state.biobanks ? state.biobanks : [],
  getSelectedBiobank: state => state.selectedBiobank ? state.selectedBiobank : {},
  getFilteredBiobanks: function (state) {
    let selection = new Set()
    let filteredBiobanks = []
    let collections = state.collections.items
    let biobanks = state.biobanks.items
    if (collections && biobanks) {
      collections.map(function (collection) {
        selection.add(collection.biobank.id)
      })
      filteredBiobanks = biobanks.filter(function (biobank) {
        return selection.has(biobank.id)
      })
    }
    return filteredBiobanks
  }
}
