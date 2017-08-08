/**
 * Created by tangzhichao on 2017/2/21.
 */
import http from './http'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

import Vueditor from 'vueditor'

import 'vueditor/dist/style/vueditor.min.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import VueECharts from 'vue-echarts'

const HttpPlugin = {
  install: function (Vue, options) {
    Vue.$http = http;
    Vue.prototype.$http = http;
  }
}


// your config here
let config = {
  // toolbar: [
  //   'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor'
  // ],
  fontName: [
    {val: 'arial black'},
    {val: 'times new roman'},
    {val: 'Courier New'}
  ],
  fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
  uploadUrl: ''
};

export default function (Vue) {

  Vue.use(HttpPlugin);
  Vue.use(iView);
  Vue.use(Vueditor, config);
  // install echarts
  Vue.component('chart', VueECharts);

}
