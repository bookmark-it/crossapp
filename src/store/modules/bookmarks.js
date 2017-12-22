import bookmarks from '../../api/bookmarks'
import _ from 'lodash'

const initialState = {
  all: [],
  favorite: [],
  toread: [],
  loading: false
}
const mutations = {
  SEARCHINGBOOKMARKS(state) {
    state.loading = true
  },
  SEARCHRESULTS(state, {page, results}) {
    state[page] = results
    state.loading = false
  },
  UPDATEBOOKMARK(state, bookmark) {
    state.all = state.all.map((bk) => {
      return (bk.id === bookmark.id) ? bookmark : bk
    })
    state.favorite = _.compact(state.favorite.map((bk) => {
      return (bk.id === bookmark.id) ? null : bk
    }))
    state.toread = _.compact(state.toread.map((bk) => {
      return (bk.id === bookmark.id) ? null : bk
    }))
  },
  DELETEBOOKMARK(state, {bookmark}) {
    state.loading = false
  },
  LOGOUT(state) {
    state = initialState
  }
}

const actions = {
  searchBookmarks({commit}, {page, query}) {
    console.log('page', page)
    console.log('query', query)
    commit('SEARCHINGBOOKMARKS')
    const params = {}
    params[page] = true
    if (query) {
      params.query = query
    }
    bookmarks.search(params).then(res => {
      res.json().then(results => {
        commit('SEARCHRESULTS', {page, results: results.hits})
      })
    })
  },
  updateBookmark({commit}, {oldVal, newVal}) {
    commit('UPDATEBOOKMARK', newVal)

    bookmarks.editBookmark(newVal).then(res => {
      res.json().then(() => {}, () => {
        commit('UPDATEBOOKMARK', oldVal)
      })
    })
  },
  deleteBookmark({commit}, {bookmark}) {
    bookmarks.deleteBk(bookmark).then(res => {
      res.json().then(result => {
        commit('DELETEBOOKMARK', {bookmark})
      })
    })
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
