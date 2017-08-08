<template>
  <div>
    <VueEditor></VueEditor>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {VueEditor} from 'vue2-editor'

  export default{
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({})
    },
    created: function () {

    },
    components: {
      VueEditor
    }
  }
</script>
<style>


</style>
