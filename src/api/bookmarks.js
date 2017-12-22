import Vue from 'vue'

export default {
  search(params) {
    return Vue.http.get('search/', {params})
  },
  fetchAll() {
    return Vue.http.get('bookmarks')
  },
  addNew(bookmark) {
    return Vue.http.post('bookmarks', bookmark)
  },
  editBookmark(bookmark) {
    return Vue.http.put('bookmarks/' + bookmark.id, bookmark)
  },
  deleteBk(bookmark) {
    return Vue.http.delete('bookmarks/' + bookmark.id)
  }
}
