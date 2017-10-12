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
  ADDBOOKMARK(state, {result}) {
    state.all.push(result)
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
  },
  addBookmark({commit}, {bookmark}) {
    console.log(bookmark)
    bookmarks.addNew(bookmark).then(res => {
      res.json().then(result => {
        commit('ADDBOOKMARK', {result})
      })
    })
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
