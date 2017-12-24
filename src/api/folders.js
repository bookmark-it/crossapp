import Vue from 'vue'

export default {
  fetchFolders() {
    return Vue.http.get('folders')
  }
}
