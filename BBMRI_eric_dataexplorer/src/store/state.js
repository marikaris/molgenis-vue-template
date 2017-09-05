// @flow

export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state = {
  error: undefined,
  biobanks: [],
  collections: [],
  filter: {
    searchQuery: '',
    isSearchClicked: false,
    filters: {
      countries: {
        entityTypeName: 'eu_bbmri_eric_biobanks',
        attributeName: 'country',
        filter: 'Country',
        options: [],
        selectedOptions: []
      },
      diagnosis: {
        entityTypeName: 'eu_bbmri_eric_collections',
        attributeName: 'diagnosis_available',
        filter: 'Diagnosis',
        options: [],
        selectedOptions: []
      },
      material_types: {
        entityTypeName: 'eu_bbmri_eric_collections',
        attributeName: 'materials',
        filter: 'Material type',
        options: [],
        selectedOptions: []
      },
      quality: {
        entityTypeName: 'eu_bbmri_eric_collections',
        attributeName: 'standards',
        filter: 'Quality',
        options: [],
        selectedOptions: []
      }
    }
  }
}

export default state
