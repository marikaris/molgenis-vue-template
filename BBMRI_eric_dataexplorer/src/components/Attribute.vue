<template>
  <div v-if="attribute.fieldType != 'COMPOUND'"> <!--TODO: implement compound-->
    <b>{{attribute.label}}: </b>{{attribute.fieldType}}
    <a v-if="attribute.fieldType==='HYPERLINK'" :href="value">{{value}}</a>
    <span v-else-if="attribute.fieldType==='BOOL'">
      <i class="fa fa-check" aria-hidden="true" v-if="value===true"></i>
      <i class="fa fa-times" aria-hidden="true" v-else></i>
    </span>
    <span v-else-if="attribute.fieldType==='XREF' | attribute.fieldType==='CATEGORICAL'">{{value[getRefLabel()]}}</span>
    <span v-else-if="attribute.fieldType==='MREF' | attribute.fieldType==='CATEGORICAL_MREF'" v-for="val in value"></br>{{val[getRefLabel()]}}</span>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";

  .fa-check {
    color: $green
  }

  .fa-times {
    color: $red
  }
</style>
<script>
  export default {
    name: 'attribute',
    props: ['attribute', 'value'],
    methods: {
      getRefLabel: function () {
        let self = this
        for (let index in self.attribute.refEntity.attributes) {
          var attr = self.attribute.refEntity.attributes[index]
          if (attr.labelAttribute) {
            return attr.name
          }
        }
      }
    }
  }
</script>
