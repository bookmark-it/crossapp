import folders from '../../api/folders'

const initialState = {
  all: [],
  loading: false
}

const mutations = {
  FETCHFOLDERS(state, {results}) {
    state.all = results
    state.loading = false
  }
}

const actions = {
  fetchFolders({commit}) {
    folders.fetchAll().then(res => {
      res.json().then(results => {
        commit('FETCHFOLDERS', {results})
      })
    })
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
