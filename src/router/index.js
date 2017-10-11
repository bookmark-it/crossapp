import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import DashboardLayout from '../components/Dashboard/DashboardLayout.vue'

import NotFound from '../pages/NotFoundPage.vue'
import Login from '../pages/Login.vue'

import BookmarksHome from 'src/pages/BookmarksHome.vue'
import BookmarksList from 'src/pages/BookmarksList.vue'
import TableList from 'src/pages/TableList.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      redirect: '/app/home'
    }, {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn) {
          next('/')
          return
        }
        next()
      }
    }, {
      path: '/app',
      component: DashboardLayout,
      redirect: '/app/home',
      beforeEnter: (to, from, next) => {
        if (!store.state.auth.loggedIn) {
          next('/login')
          return
        }
        next()
      },
      children: [
        {
          path: 'home',
          name: 'dashboard',
          component: BookmarksHome
        }, {
          path: 'bookmarks',
          name: 'bookmarks',
          component: BookmarksList
        }, {
          path: 'table-list',
          name: 'Bookmark Groups',
          component: TableList
        }
      ]
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
