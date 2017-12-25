import Vue from 'vue'

export default {
  fetchFolders() {
    return Vue.http.get('folders')
  },
  editFolder(folder) {
    return Vue.http.put('folders/' + folder.id, folder)
  }
}
