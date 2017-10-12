import friends from '../../api/friends'

const initialState = {
  all: [],
  loading: false
}

const mutations = {
  FETCHFRIENDS(state, {results}) {
    state.all = results
    state.loading = false
  }
}

const actions = {
  fetchFriends({commit}) {
    friends.fetchAll().then(res => {
      res.json().then(results => {
        commit('FETCHFRIENDS', {results})
      })
    })
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
