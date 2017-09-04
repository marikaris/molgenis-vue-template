import { get } from '@molgenis/molgenis-api-client'
import { SET_BIOBANKS, SET_COUNTRIES, SET_MATERIAL_TYPES, SET_QUALITY, SET_COLLECTIONS, SET_ERROR } from './mutations'

export const GET_BIOBANKS = '__GET_BIOBANKS__'
export const GET_COUNTRIES = '__GET_COUNTRIES__'
export const GET_MATERIAL_TYPES = '__GET_MATERIAL_TYPES__'
export const GET_QUALITY = '__GET_QUALITY__'
export const GET_COLLECTIONS = '__GET_COLLECTIONS__'

export default {
  /**
   * Example action for retrieving all EntityTypes from the server
   */
  [GET_BIOBANKS] ({commit}, selectedOptions) {
    /**
     * Pass options to the fetch like body, method, x-molgenis-token etc...
     * @type {{}}
     */
    const options = {}
    let query = ''
    if (selectedOptions.length > 0) {
      query = '&q=country=in=("' + selectedOptions.join('","') + '")'
    }
    console.log(query)
    let apiUrl = '/api/v2/eu_bbmri_eric_biobanks?num=10000' + query
    get(apiUrl, options).then(response => {
      commit(SET_BIOBANKS, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_COUNTRIES] ({commit}) {
    /**
     * Pass options to the fetch like body, method, x-molgenis-token etc...
     * @type {{}}
     */
    const options = {}
    get('/api/v2/eu_bbmri_eric_countries?num=10000', options).then(response => {
      commit(SET_COUNTRIES, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_MATERIAL_TYPES] ({commit}) {
    /**
     * Pass options to the fetch like body, method, x-molgenis-token etc...
     * @type {{}}
     */
    const options = {}
    get('/api/v2/eu_bbmri_eric_material_types?num=10000', options).then(response => {
      commit(SET_MATERIAL_TYPES, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_QUALITY] ({commit}) {
    /**
     * Pass options to the fetch like body, method, x-molgenis-token etc...
     * @type {{}}
     */
    const options = {}
    get('/api/v2/eu_bbmri_eric_ops_standards?num=10000', options).then(response => {
      commit(SET_QUALITY, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_COLLECTIONS] ({commit}, filters) {
    /**
     * Pass options to the fetch like body, method, x-molgenis-token etc...
     * @type {{}}
     */
    const options = {}
    let query = ''
    Object.keys(filters).map(function (key, index) {
      let filter = filters[key]
      if (filter.entityTypeName === 'eu_bbmri_eric_collections') {
        let selectedOptions = filter.selectedOptions
        let collectionsAttr = filter.attributeName
        if (selectedOptions.length > 0) {
          if (!query) {
            query += '&q='
          } else {
            query += ';'
          }
          query += collectionsAttr + '=in=("' + selectedOptions.join('","') + '")'
        }
      }
    })
    let apiUrl = '/api/v2/eu_bbmri_eric_collections?num=10000' + query
    get(apiUrl, options).then(response => {
      commit(SET_COLLECTIONS, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  }
}
