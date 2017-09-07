import { get } from '@molgenis/molgenis-api-client'
import { SET_BIOBANK, SET_BIOBANKS, SET_COUNTRIES, SET_ERROR, SET_MATERIAL_TYPES, SET_QUALITY } from './mutations'

export const GET_BIOBANK = '__GET_BIOBANK__'
export const GET_COUNTRIES = '__GET_COUNTRIES__'
export const GET_MATERIAL_TYPES = '__GET_MATERIAL_TYPES__'
export const GET_QUALITY = '__GET_QUALITY__'

export const GET_BIOBANKS_AND_COLLECTIONS = '__GET_BIOBANKS_AND_COLLECTIONS__'

export default {
  [GET_BIOBANKS_AND_COLLECTIONS] ({commit}, query) {
    let uri = '/api/v2/eu_bbmri_eric_biobanks?attrs=collections(*),*&num=100'
    if (query) uri += '&q=*=q="' + query + '"'

    get(uri, {}).then(response => {
      commit(SET_BIOBANKS, response)
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
    get('/api/v2/eu_bbmri_eric_countries?num=100', options).then(response => {
      // FIXME: get complete response and show label attribute in checkbox
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
    get('/api/v2/eu_bbmri_eric_material_types?num=100', options).then(response => {
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
    get('/api/v2/eu_bbmri_eric_ops_standards?num=100', options).then(response => {
      commit(SET_QUALITY, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_BIOBANK] ({commit}, biobankId) {
    const options = {}
    let apiUrl = '/api/v2/eu_bbmri_eric_biobanks/' + biobankId + '?attrs=collections(*),*'
    get(apiUrl, options).then(response => {
      commit(SET_BIOBANK, response)
    }, error => {
      commit(SET_ERROR, error)
    })
  }
}
