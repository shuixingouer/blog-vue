import Vuex from 'vuex'
import Vue from 'vue'
import home from './modules/home'
import detail from './modules/detail'

Vue.use(Vuex)

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home,
    detail
  },
  strict: debug
})
