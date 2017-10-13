import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import vClickOutside from 'v-click-outside'
import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'

// Plugins
import GlobalComponents from './globalComponents'
// import Notifications from './components/NotificationPlugin'
import SideBar from './components/SidebarPlugin'
import App from './App'

// library imports
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/paper-dashboard.scss'
import 'es6-promise/auto'

import router from './router'
import store from './store'

sync(store, router)

// Set up vue-resource
Vue.use(VueResource)
const authToken = localStorage.getItem('auth_token')
Vue.http.options.root = process.env.API_BASE_URL
Vue.http.headers.common['Authorization'] = authToken ? `Token ${authToken}` : ''

// plugin setup
Vue.use(GlobalComponents)
Vue.use(vClickOutside)
// Vue.use(Notifications)
Vue.use(SideBar)
Vue.use(VModal)

// global libraries setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: {
    Chartist: Chartist
  },
  ...App
})
