<template>
  <div id="app">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}

    {{#unless vuex}}
    \{{message}}
    {{/unless}}
  </div>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello'

{{/unless}}
export default {
  {{#unless vuex}}
  props: ['message'],
  {{/unless}}
  name: 'app'{{#router}}{{else}},
  components: {
    Hello
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
  margin-top: 60px;
}
</style>
