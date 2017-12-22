import bookmarks from '../../api/bookmarks'

const initialState = {
  search: [],
  loading: false
}
const mutations = {
  SEARCHINGBOOKMARKS(state) {
    state.loading = true
  },
  SEARCHRESULTS(state, {results}) {
    state.search = results
    state.loading = false
  },
  UPDATEBOOKMARK(state, bookmark) {
    state.search = state.search.map((bk) => {
      return (bk.id === bookmark.id) ? bookmark : bk
    })
  },
  DELETEBOOKMARK(state, {bookmark}) {
    state.loading = false
  },
  LOGOUT(state) {
    state = initialState
  }
}

const actions = {
  searchBookmarks({commit}, params) {
    commit('SEARCHINGBOOKMARKS')
    bookmarks.search(params).then(res => {
      res.json().then(results => {
        commit('SEARCHRESULTS', {results: results.hits})
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
