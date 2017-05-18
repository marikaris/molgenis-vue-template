<template>
  <div class="container">
    <div id="app">
      <b-alert show dismissible>A vue bootstrap alert component</b-alert>
    {{#router}}
      <router-view></router-view>
    {{else}}
      <hello-world></hello-world>
    {{/router}}
    {{#unless vuex}}
    \{{message}}
    {{/unless}}
    </div>
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'

{{/unless}}
export default {
  {{#unless vuex}}
  props: ['message'],
  {{/unless}}
  name: 'molgenis-app'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
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
