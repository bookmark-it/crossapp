import websites from '../../api/websites'

const initialState = {
  all: [],
  loading: false
}

const mutations = {
  FETCHWEBSITES(state, {results}) {
    state.all = results
    state.loading = false
  }
}

const actions = {
  fetchWebsites({commit}) {
    websites.fetchAll().then(res => {
      res.json().then(results => {
        commit('FETCHWEBSITES', {results})
      })
    })
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
