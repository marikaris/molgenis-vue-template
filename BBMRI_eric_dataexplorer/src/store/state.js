// @flow

export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state = {
  error: undefined,
  biobanks: [],
  countries: [],
  filters: {
    countries: {
      filter: 'Country',
      options: []
    },
    diagnosis: {
      filter: 'Diagnosis',
      options: []
    },
    material_types: {
      filter: 'Material type',
      options: []
    },
    quality: {
      filter: 'Quality',
      options: []
    }
  }
}

export default state
