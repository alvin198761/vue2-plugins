<template>
  <div>
    <!--<video id="video" width="640" height="480" autoplay="true"></video>-->
    <!--<button id="snap">Snap Photo</button>-->
    <!--<canvas id="canvas" width="640" height="480"></canvas>-->
    <Spin fix size="large" v-if="loading">
    </Spin>
    <Table stripe :columns="columns1" :data="data1"></Table>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    data: function () {
      return {
        data: [],
        total: 0,
        loading: false,
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    computed: {
      ...mapGetters({})
    },
    created: function () {
      const that = this;
      that.loading = true;
      this.$http.get("/api/custom")
        .then(res => {
          console.log(res.data);
          that.data = res.data.items;
          that.total = res.data.total;
          that.loading = false;
        })
        .catch(res => {
          that.loading = false;
        })
//// 设置事件监听，DOM内容加载完成，和jQuery的$.ready() 效果差不多。
//      window.addEventListener("DOMContentLoaded", function() {
//        // canvas 元素将用于抓拍
//        var canvas = document.getElementById("canvas"),
//          context = canvas.getContext("2d"),
//          // video 元素，将用于接收并播放摄像头 的数据流
//          video = document.getElementById("video"),
//          videoObj = { "video": true },
//          // 一个出错的回调函数，在控制台打印出错信息
//          errBack = function(error) {
//            console.log("-----")
//            if("object" === typeof window.console){
//              console.log("Video capture error: ", error.code);
//            }
//          };
//
//        // Put video listeners into place
//        // 针对标准的浏览器
//        if(navigator.getUserMedia) { // Standard
//          navigator.getUserMedia(videoObj, function(stream) {
//            console.log(stream)
//            video.src = window.URL.createObjectURL(stream);
//            video.play();
//          }, errBack);
//        } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
//          navigator.webkitGetUserMedia(videoObj, function(stream){
//            video.src = window.webkitURL.createObjectURL(stream);
//            video.play();
//          }, errBack);
//        }
//        // 对拍照按钮的事件监听
//        document.getElementById("snap").addEventListener("click", function() {
//          // 画到画布上
//          context.drawImage(video, 0, 0, 640, 480);
//        });
//
//      }, false);
    },
    methods: {
      doCapture(){

      }
    }
  }
</script>
<style>


</style>
