// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import 'string.prototype.startswith'
import promise from 'es6-promise'

import App from './App.vue';
import store from './store/index'
import installFilter from './filters/vue-filters';
import installPlugin from './plugins/vue-plugins';
import installRouter from './routes/vue-routers';
import {sync} from 'vuex-router-sync';

import '../node_modules/jquery';
import '../node_modules/jquery.qrcode';

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'


promise.polyfill();

// install vue plugin
installPlugin(Vue);

// install router
const router = installRouter(Vue);

// install filter
installFilter(Vue);

sync(store, router)

/* eslint-disable no-new */
new Vue({
  router: router,
  store: store,
  el: '#app',
  template: '<App/>',
  components: {App}
});
