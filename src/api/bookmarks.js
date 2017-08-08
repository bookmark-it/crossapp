import Vue from 'vue'

export default {
  fetchAll() {
    return Vue.http.get('bookmarks')
  }
}
