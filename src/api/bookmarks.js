import Vue from 'vue'

export default {
  fetchAll() {
    return Vue.http.get('bookmarks')
  },
  addNew(bookmark) {
    return Vue.http.post('bookmarks', bookmark)
  },
  deleteBk(bookmark) {
    return Vue.http.delete('bookmarks/' + bookmark.id)
  }
}
