<template>
  <div class="container">
    <div id="app">
      <b-alert show dismissible>A vue bootstrap alert component</b-alert>
    {{#router}}
      <router-view></router-view>
    {{else}}
      <mg-hello></mg-hello>
    {{/router}}
      <mg-i18n></mg-i18n>
    {{#unless vuex}}
    \{{message}}
    {{/unless}}
    </div>
  </div>
</template>

<script>
import MgI18n from './components/MgI18n'
{{#unless router}}
import MgHello from './components/MgHello'
{{/unless}}

export default {
  {{#unless vuex}}
  props: ['message'],
  {{/unless}}
  name: 'molgenis-app',
  components: {
    {{#unless router}}MgHello, {{/unless}}MgI18n
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
