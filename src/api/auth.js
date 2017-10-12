import Vue from 'vue'

export default {
  login ({username, password}) {
    return Vue.http.post('auth/login/', {username, password})
  },
  fetchUserInfo () {
    return Vue.http.get('me')
  }
}
