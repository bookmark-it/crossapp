import bookmarks from '../../api/bookmarks'

const initialState = {
  all: [],
  loading: false
}

const mutations = {
  REQUESTBOOKMARKS(state) {
    state.loading = true
  },
  FETCHBOOKMARKS(state, {results}) {
    state.all = results
    state.loading = false
  },
  LOGOUT(state) {
    state = initialState
  }
}

const actions = {
  fetchBookmarks({commit}) {
    commit('REQUESTBOOKMARKS')
    bookmarks.fetchAll().then(res => {
      res.json().then(results => {
        commit('FETCHBOOKMARKS', {results})
      })
    })
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
