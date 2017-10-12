import categories from '../../api/categories'

const initialState = {
  all: [],
  loading: false
}

const mutations = {
  FETCHCATEGORIES(state, {results}) {
    state.all = results
    state.loading = false
  }
}

const actions = {
  fetchCategories({commit}) {
    categories.fetchAll().then(res => {
      res.json().then(results => {
        commit('FETCHCATEGORIES', {results})
      })
    })
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
