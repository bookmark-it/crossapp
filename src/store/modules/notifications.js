import notifications from '../../api/notifications'

const initialState = {
  all: [],
  loading: false
}

const mutations = {
  FETCHNOTIFICATIONS(state, {results}) {
    state.all = results
    state.loading = false
  }
}

const actions = {
  fetchNotifications({commit}) {
    notifications.fetchAll().then(res => {
      res.json().then(results => {
        commit('FETCHNOTIFICATIONS', {results})
      })
    })
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
