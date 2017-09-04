export const SET_BIOBANKS = '__SET_BIOBANKS__'
export const SET_COUNTRIES = '__SET_COUNTRIES__'
export const SET_MATERIAL_TYPES = '__SET_MATERIAL_TYPES__'
export const SET_ERROR = '__SET_ERROR__'

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
  [SET_ERROR] (state, error) {
    state.error = error
  }
}
