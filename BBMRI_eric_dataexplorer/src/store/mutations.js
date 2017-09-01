export const SET_BIOBANKS = '__SET_BIOBANKS__'
export const SET_COUNTRIES = '__SET_COUNTRIES__'
export const SET_ERROR = '__SET_ERROR__'

export default {
  [SET_BIOBANKS] (state, biobanks) {
    state.biobanks = biobanks
  },
  [SET_COUNTRIES] (state, countries) {
    state.countries = countries
  },
  [SET_ERROR] (state, error) {
    state.error = error
  }
}
