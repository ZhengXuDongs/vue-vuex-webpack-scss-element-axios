import Vue from 'vue'
import vuex from 'vuex'
import user from './modules/user' // 引进模块
Vue.use(vuex)

export default new vuex.Store({
  modules: {
    user
  }
})
