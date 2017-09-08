<template>
  <div>
    <img :src=imgSource :alt="quality"/>
  </div>
</template>

<style lang="scss">
  @import "~variables";
  @import "~mixins";

  .biobank_card {
    margin-top: 1em;
  }

  .biobank_header:hover {
    cursor: pointer;
    cursor: hand;
  }
</style>

<script>

  export default {
    name: 'quality-logo',
    props: ['quality'],
    computed: {
      imgSource: function get () {
        return '../../static/standards_logos/' + this.quality.replace(/[- :/]/g, '_') + '_E.png'
      }
    }
  }
</script>
