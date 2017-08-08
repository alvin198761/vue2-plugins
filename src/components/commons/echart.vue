<template>
  <chart ref="dataChart" :options="options" :style="{ width:width ,height: height }" auto-resize></chart>
</template>
<script>
  export default {
    props: {
      options: Object,
      height: {
        type: String,
        default: 400 + 'px'
      },
      width: {
        type: String,
        default: 100 + '%'
      }
    },
    data: function () {
      return {}
    }
  }

</script>
<style>
</style>
