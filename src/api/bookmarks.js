import Vue from 'vue'

export default {
  fetchAll() {
    return Vue.http.get('bookmarks')
  },
  addNew(bookmark) {
    console.log(bookmark)
    return Vue.http.post('bookmarks', bookmark)
  }
}
