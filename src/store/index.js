import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import bookmarks from './modules/bookmarks'
import folders from './modules/folders'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    bookmarks,
    folders
  },
  strict: debug
})
