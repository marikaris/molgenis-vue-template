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
  template: '<App/>',
  components: { App }
})
