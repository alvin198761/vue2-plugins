<template>
  <div>
    <Button @click="showCapture=true">拍照</Button>
    <Modal
      title="会员拍照" width="800"
      v-model="showCapture">
        <iframe v-if="showCapture" id="captureFrame" scrolling="no" src="#/capture" style="border: none;overflow: hidden" width="100%" height="400"
                sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation">
        </iframe>
    </Modal>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    data: function () {
      return {
        showCapture: false,
        uploadUrl: ''
      }
    },
    computed: {
      ...mapGetters({})
    },
    methods: {
      webcap(){
        // canvas 元素将用于抓拍
        console.log(window.frames['captureFrame'].chi)
//        let video = document.getElementById("captureFrame").document.getElementById("video");
//        let canvas = this.$refs.canvas;
//        let context = canvas.getContext("2d");
//        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
    }
  }
</script>
<style>


</style>
