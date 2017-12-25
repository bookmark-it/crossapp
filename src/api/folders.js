import Vue from 'vue'

export default {
  fetchFolders() {
    return Vue.http.get('folders')
  },
  addFolder(folder) {
    return Vue.http.post('folders', folder)
  },
  editFolder(folder) {
    return Vue.http.put('folders/' + folder.id, folder)
  }
}
