import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import bookmarks from './modules/bookmarks'
import categories from './modules/categories'
import folders from './modules/folders'
import websites from './modules/websites'
import friends from './modules/friends'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    bookmarks,
    categories,
    folders,
    websites,
    friends
  },
  strict: debug
})
