<template>
  <div class="hello">
    <h1>This is the MOLGENIS Hello Component</h1>
    <p>message: \{{ message }}</p>
    <h2 v-i18n="L10N_MESSAGES"></h2>
    <dl>
      <dt>Using $t function</dt>
        <dd>\{{$t('MESSAGE1')}}</dd>
      <dt>Using directive</dt>
        <dd v-i18n="MESSAGE2"></dd>
      <dt>Using filter</dt>
        <dd>\{{'MESSAGE3' | i18n}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'molgenis-hello',
  data () {
    return {
      message: {{#vuex}}this.$store.state.message{{else}}'Welcome to Your Vue.js App'{{/vuex}}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
