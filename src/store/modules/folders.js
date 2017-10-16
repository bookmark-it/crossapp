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
  }
}

const actions = {
  fetchFolders({commit}) {
    folders.fetchAll().then(res => {
      res.json().then(results => {
        commit('FETCHFOLDERS', {results})
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
