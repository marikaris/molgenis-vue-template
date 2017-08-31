<template>
  <div class="form-check filter_checkbox">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."> {{label}}
    </label>
  </div>
</template>
<style lang="scss">
  @import "~variables";
  @import "~mixins";

  .filter_checkbox {
    background-color: $white;
    padding: 0.3em;
    width: 100%;

  }
</style>
<script>

  export default {
    name: 'filter-checkbox',
    props: ['name', 'label'],
    computed: {
      value: {
        get: function () {
          console.log(this.name)
//          return this.$store.state[this.name]
        },
        set: function (checked) {
          console.log('checked')
        }
//          this.$store.dispatch(SET_FILTER_ASYNC, {name: this.name, value: checked})
      }
    }
  }
</script>
