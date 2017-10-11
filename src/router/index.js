import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import DashboardLayout from '../components/Dashboard/DashboardLayout.vue'

import NotFound from '../pages/NotFoundPage.vue'
import Login from '../pages/Login.vue'

import BookmarksHome from 'src/pages/BookmarksHome.vue'
import Bookmarks from 'src/pages/Bookmarks.vue'
import Notifications from 'src/pages/Notifications.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Typography from 'src/pages/Typography.vue'
import TableList from 'src/pages/TableList.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      redirect: '/app/overview'
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
      redirect: '/app/overview',
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
          component: Bookmarks
        }, {
          path: 'notifications',
          name: 'notifications',
          component: Notifications
        }, {
          path: 'icons',
          name: 'icons',
          component: Icons
        }, {
          path: 'maps',
          name: 'maps',
          component: Maps
        }, {
          path: 'typography',
          name: 'typography',
          component: Typography
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
