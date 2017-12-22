import folders from '../../api/folders'

const initialState = {
  all: [],
  loading: false
}

const mutations = {
  FETCHFOLDERS(state, {results}) {
    state.all = results
    state.loading = false
  },
  UPDATEFOLDER(state, {folder, result}) {
    folder = result
    folder['children_directories'] = ''
    folder.children_directories = result.children_directories
  }
}

const actions = {
  fetchFolders({commit}) {
    folders.fetchAll().then(res => {
      res.json().then((response) => {
        commit('FETCHFOLDERS', response)
      })
    })
  },
  updateCurrentFolder({commit}, {folder, result}) {
    commit('UPDATEFOLDER', {folder, result})
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
