/**
 * Created by tangzhichao on 2017/2/21.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: app
  }
})
