export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state = {
  error: undefined,
  selectedBiobank: {},
  biobanks: {},
  collections: {},
  filters: {
    countries: {
      entityTypeName: 'eu_bbmri_eric_biobanks',
      attributeName: 'country',
      label: 'Country',
      options: [],
      selectedOptions: []
    },
    diagnosis: {
      entityTypeName: 'eu_bbmri_eric_collections',
      attributeName: 'diagnosis_available',
      label: 'Diagnosis',
      options: [],
      selectedOptions: []
    },
    material_types: {
      entityTypeName: 'eu_bbmri_eric_collections',
      attributeName: 'materials',
      label: 'Material type',
      options: [],
      selectedOptions: []
    },
    quality: {
      entityTypeName: 'eu_bbmri_eric_collections',
      attributeName: 'standards',
      label: 'Quality',
      options: [],
      selectedOptions: []
    }
  },
  searchQuery: '',
  isSearchClicked: false
}

export default state
