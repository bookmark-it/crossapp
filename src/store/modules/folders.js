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
  UPDATEFOLDER(state, folder) {
    state.root = state.root.map((fd) => {
      return (fd.id === folder.id) ? folder : fd
    })
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
  updateFolder({commit}, {oldVal, newVal}) {
    commit('UPDATEFOLDER', newVal)

    folders.editFolder(oldVal).then(res => {
      res.json().then(() => {}, () => {
        commit('UPDATEFOLDER', oldVal)
      })
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
