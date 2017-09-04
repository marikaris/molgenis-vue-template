// @flow

export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state = {
  error: undefined,
  biobanks: [],
  collections: [],
  filters: {
    countries: {
      filter: 'Country',
      options: [],
      selectedOptions: []
    },
    diagnosis: {
      filter: 'Diagnosis',
      options: [],
      selectedOptions: []
    },
    material_types: {
      filter: 'Material type',
      options: [],
      selectedOptions: []
    },
    quality: {
      filter: 'Quality',
      options: [],
      selectedOptions: []
    }
  }
}

export default state
