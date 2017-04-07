<template>
  <div>
    <h2 v-i18n="L10N"></h2>
    <dl>
      <dt>date using moment</dt>
      <dd>\{{ date | moment('LLLL') }}</dd>
      <dt>Using $t function</dt>
      <dd>\{{ $t('MESSAGE1') }}</dd>
      <dt>Using directive</dt>
      <dd v-i18n="MESSAGE2"></dd>
      <dt>Using filter</dt>
      <dd>\{{ 'MESSAGE3'|i18n }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'molgenis-i18n',
  data () {
    return {
      message: this.$store.state.message
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
