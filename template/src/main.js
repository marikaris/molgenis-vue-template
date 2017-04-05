{{#vuex}}import 'es6-promise/auto'{{/vuex}}
import Vue from 'vue'
import App from './App'

{{#vuex}}import store from './store'{{/vuex}}
{{#router}}import router from './router'{{/router}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#vuex}}
  store,
  {{/vuex}}
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  template: '<App />',
  {{else}}
  data: {
    message: window.__INITIAL_STATE__
  },
  template: '<App :message="message"></App>',
  {{/vuex}}
  components: { App }
})
