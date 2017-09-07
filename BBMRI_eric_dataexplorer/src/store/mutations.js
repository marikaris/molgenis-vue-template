export const SET_BIOBANKS = '__SET_BIOBANKS__'
export const SET_BIOBANK = '__SET_BIOBANK__'
export const SET_COUNTRIES = '__SET_COUNTRIES__'
export const SET_MATERIAL_TYPES = '__SET_MATERIAL_TYPES__'
export const SET_QUALITY = '__SET_QUALITY__'
export const SET_FILTER = '__SET_FILTER__'
export const SET_ERROR = '__SET_ERROR__'
export const SET_COLLECTIONS = '__SET_COLLECTIONS__'
export const SET_SEARCH_QUERY = '__SET_SEARCH_QUERY__'
export const SET_SEARCH_CLICKED = '__SET_SEARCH_CLICKED__'

export default {
  [SET_BIOBANKS] (state, biobanks) {
    state.biobanks = biobanks
  },
  [SET_COUNTRIES] (state, countries) {
    state.filters.countries.options = countries
  },
  [SET_MATERIAL_TYPES] (state, materialTypes) {
    state.filters.material_types.options = materialTypes
  },
  [SET_QUALITY] (state, quality) {
    state.filters.quality.options = quality
  },
  [SET_FILTER] (state, {name, newSelectedOptions}) {
    state.filters[name].selectedOptions = newSelectedOptions
  },
  [SET_COLLECTIONS] (state, collections) {
    state.collections = collections
  },
  [SET_ERROR] (state, error) {
    state.error = error
  },
  [SET_SEARCH_QUERY] (state, query) {
    state.searchQuery = query
  },
  [SET_SEARCH_CLICKED] (state, value) {
    state.isSearchClicked = value
  },
  [SET_BIOBANK] (state, biobank) {
    state.selectedBiobank = biobank
  }
}
