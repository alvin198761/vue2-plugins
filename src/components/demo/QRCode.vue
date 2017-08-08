<template>
  <div>二维码测试:<br/>
    <div id="output"></div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({})
    },
    created: function () {
      jQuery(function () {
        jQuery('#output').qrcode("http://www.baidu.com");
      })
    }
  }
</script>
<style>


</style>
