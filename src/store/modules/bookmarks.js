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
  ADDBOOKMARKKEYWORD(state, { bookmark, newKeywordInput }) {
    // bookmark.keywords = newKeywordInput
    bookmark.keywords.push(newKeywordInput)
  },
  REMOVEBOOKMARKKEYWORD(state, { bookmark, deletedKeyword }) {
    let index = bookmark.keywords.indexOf(deletedKeyword)
    bookmark.keywords.splice(index, 1)
  },
  EDITBOOKMARK(state, {result}) {
    let index = state.all.indexOf(result)
    state.all.splice(index, 1, result)
    // state.all[result.id] = result
    for (var i in state.all) {
      if (state.all[i].id === result.id) {
        console.log(i)
        // state.all[i] = result
        break // Stop this loop, we found it!
      }
    }
    console.log(state.all[i])
    state.loading = false
  },
  DELETEBOOKMARK(state, {bookmark}) {
    let index = state.all.indexOf(bookmark)
    state.all.splice(index, 1)
    state.loading = false
  },
  TOGGLETOREADBOOKMARK(state, {bookmark}) {
    let index = state.all.indexOf(bookmark)
    state.all[index].toread = !state.all[index].toread
  },
  TOGGLEFAVORITEBOOKMARK(state, {bookmark}) {
    let index = state.all.indexOf(bookmark)
    state.all[index].favorite = !state.all[index].favorite
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
    bookmarks.addNew(bookmark).then(res => {
      res.json().then(result => {
        commit('ADDBOOKMARK', {result})
      })
    })
  },
  removeBookmarkKeywords({commit}, {bookmark, deletedKeyword}) {
    commit('REMOVEBOOKMARKKEYWORD', {bookmark, deletedKeyword})
  },
  updateBookmarkKeywords({commit}, {bookmark, newKeywordInput}) {
    commit('ADDBOOKMARKKEYWORD', {bookmark, newKeywordInput})
  },
  toggleToreadBookmark({commit}, {bookmark}) {
    commit('TOGGLETOREADBOOKMARK', {bookmark})
    bookmarks.editBookmark(bookmark).then(res => {
      res.json().then(result => {
        commit('EDITBOOKMARK', {result})
      }, err => {
        commit('TOGGLETOREADBOOKMARK', {bookmark})
      })
    })
  },
  toggleFavoriteBookmark({commit}, {bookmark}) {
    commit('TOGGLEFAVORITEBOOKMARK', {bookmark})
    bookmarks.editBookmark(bookmark).then(res => {
      res.json().then(result => {
        commit('EDITBOOKMARK', {result})
      }, err => {
        commit('TOGGLEFAVORITEBOOKMARK', {bookmark})
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
