import _ from 'lodash'

import folders from '../../api/folders'

const initialState = {
  root: [],
  currentFolder: null,
  loading: false
}

const mutations = {
  FETCHFOLDERS(state, {results}) {
    state.root = results
    state.loading = false
  },
  ADDFOLDER(state, folder) {
    state.root.push(folder)
  },
  DELETEFOLDER(state, folder) {
    state.root = _.compact(state.root.map((fd) => ((fd.id === folder.id) ? null : fd)))
  }
}

const actions = {
  fetchFolders({commit}) {
    folders.fetchFolders().then(res => {
      res.json().then((response) => {
        commit('FETCHFOLDERS', response)
      })
    })
  },
  moveFolder({commit}, {oldVal, newVal}) {
    commit('DELETEFOLDER', newVal)

    folders.editFolder(newVal).then(() => {}, () => {
      commit('ADDFOLDER', oldVal)
    })
  },
  updateCurrentFolder({commit}, {folder, result}) {
    // commit('UPDATEFOLDER', {folder, result})
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
