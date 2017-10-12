import Vue from 'vue'
import auth from '../../api/auth'

const initialState = {
  loggedIn: !!localStorage.getItem('auth_token') || false,
  loading: false,
  error: ''
}

const mutations = {
  LOADING(state, {loading}) {
    state.loading = loading
  },
  LOGIN(state) {
    state.loggedIn = true
    state.loading = false
    state.error = ''
  },
  FETCHUSERINFORMATION(state, {result}) {
    console.log('Fetch user information store result')
    console.log(result)
    state.userInformation = result
    // console.log(state.userInformation)
  },
  LOGOUT(state) {
    state.loggedIn = false
    state.loading = false
    state.error = ''
  },
  ERROR(state) {
    state.loading = false
    state.loading = false
    state.error = 'Username or password incorrect'
  }
}

const actions = {
  login({commit}, {$router, credentials}) {
    commit('LOADING', {loading: true})
    auth.login(credentials).then(res => {
      res.json().then(({auth_token}) => {
        /* eslint-disable camelcase */
        localStorage.setItem('auth_token', auth_token)
        Vue.http.headers.common['Authorization'] = `Token ${auth_token}`
        /* eslint-disable camelcase */
        commit('LOGIN')
        $router.push('/')
      })
    }, (err) => {
      commit('ERROR')
    })
  },
  fetchUserInformation({commit}) {
    auth.fetchUserInfo().then(res => {
      res.json().then(result => {
        console.log(result)
        commit('FETCHUSERINFORMATION', {result})
      })
    })
  },
  logout({commit}, {$router}) {
    Vue.http.headers.common['Authorization'] = null
    localStorage.removeItem('auth_token')
    commit('LOGOUT')
    $router.push('/login')
  }
}

export default {
  state: initialState,
  actions,
  mutations
}
