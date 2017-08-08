import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import Login from '../components/GeneralViews/Login.vue'

import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Bookmarks from 'src/components/Dashboard/Views/Bookmarks.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'

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
          path: 'overview',
          name: 'overview',
          component: Overview
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
          name: 'table-list',
          component: TableList
        }
      ]
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
