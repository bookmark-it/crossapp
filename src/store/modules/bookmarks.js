import bookmarks from '../../api/bookmarks'
import _ from 'lodash'

const initialState = {
  all: [],
  favorite: [],
  toread: [],
  next: false,
  loading: false
}
const mutations = {
  SEARCHINGBOOKMARKS(state) {
    state.loading = true
  },
  SEARCHRESULTS(state, {pageType, response, push}) {
    state[pageType] = push ? state[pageType].concat(response.results) : response.results
    state.next = response.next
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
  searchBookmarks({commit}, {pageType, push, query, page}) {
    if (!push) {
      commit('SEARCHINGBOOKMARKS')
    }
    const params = {}
    params[pageType] = true
    if (query) {
      params.query = query
    }
    params.page = page || 1
    console.log('pageType', pageType)
    bookmarks.search(params).then(res => {
      res.json().then((response) => {
        commit('SEARCHRESULTS', {pageType, response, push})
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
