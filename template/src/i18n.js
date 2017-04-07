import i18next from 'i18next'
import XHR from 'i18next-xhr-backend'

import moment from 'moment'

/**
 * I18next Vue module.
 *
 * @param Vue the Vue class
 * @param lng preferred language
 * @param fallbackLng fallbackLanguage or array of fallback languages
 * @param callback function to call when the language bundles have been loaded
 * @param namespace the namespace to use
 *
 * @see https://github.com/icebob/vue-express-mongo-boilerplate/blob/master/client/app/core/i18next.js
 */
const install = (Vue, {lng, fallbackLng, callback}) => {
  i18next
    .use(XHR)
    .init({
      lng,
      fallbackLng,
      ns: ['{{name}}'],
      defaultNS: '{{name}}',
      load: 'all',
      saveMissing: true,
      saveMissingTo: 'current',
      backend: {
        loadPath: '/api/v2/i18n/\{{ns}}/\{{lng}}',
        addPath: '/api/v2/i18n/\{{ns}}',
        allowMultiLoading: false,
        withCredentials: true
      }
// eslint-disable-next-line handle-callback-err
    }, (err, t) => {
      Vue.prototype.$lng = i18next.language
      Vue.prototype._ = (key, opts) => {
        return t(key, opts)
      }
      moment.locale(i18next.language)
      console.log('I18Next initialized! Language: ' + i18next.language)
      if (callback) {
        callback(i18next, t)
      }
    })

  // Register as a filter
  Vue.filter('i18n', function (value, options) {
    return i18next.t(value, options)
  })

  // Register as a directive
  Vue.directive('i18n', {
    bind: function (el, binding) {
      el.innerHTML = i18next.t(binding.expression)
    }
  })

  Vue.prototype.$i18n = i18next
  Vue.prototype.$t = (key, opts) => {
    return i18next.t(key, opts)
  }
}

export default {
  install
}
