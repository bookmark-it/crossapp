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
  ADDBOOKMARK(state, {result}) {
    state.search.push(result)
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
    let index = state.search.indexOf(result)
    state.search.splice(index, 1, result)
    // state.search[result.id] = result
    for (var i in state.search) {
      if (state.search[i].id === result.id) {
        console.log(i)
        // state.search[i] = result
        break // Stop this loop, we found it!
      }
    }
    console.log(state.search[i])
    state.loading = false
  },
  DELETEBOOKMARK(state, {bookmark}) {
    let index = state.search.indexOf(bookmark)
    state.search.splice(index, 1)
    state.loading = false
  },
  TOGGLETOREADBOOKMARK(state, {bookmark}) {
    let index = state.search.indexOf(bookmark)
    state.search[index].toread = !state.search[index].toread
  },
  TOGGLEFAVORITEBOOKMARK(state, {bookmark}) {
    let index = state.search.indexOf(bookmark)
    state.search[index].favorite = !state.search[index].favorite
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
