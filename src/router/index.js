import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import DashboardLayout from '../components/Dashboard/DashboardLayout.vue'

import NotFound from '../pages/NotFoundPage.vue'
import Login from '../pages/Login.vue'

import BookmarksRegister from 'src/pages/BookmarksRegister.vue'
import BookmarksList from 'src/pages/BookmarksList.vue'
import FoldersList from 'src/pages/FoldersList.vue'
import BookmarksFolderPage from 'src/pages/BookmarksFolderPage.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/register',
      component: BookmarksRegister,
      beforeEnter: (to, from, next) => {
        if (store.state.auth.loggedIn) {
          next('/')
          return
        }
        next()
      }
    }, {
      path: '/',
      component: DashboardLayout,
      redirect: '/app/bookmarks'
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
      redirect: '/app/bookmarks',
      beforeEnter: (to, from, next) => {
        if (!store.state.auth.loggedIn) {
          next('/login')
          return
        }
        next()
      },
      children: [
        {
          path: 'bookmarks',
          name: 'bookmarks',
          component: BookmarksList,
          props: { pageType: 'all' }
        }, {
          path: 'favorites',
          name: 'favorites',
          component: BookmarksList,
          props: { pageType: 'favorite' }
        }, {
          path: 'toread',
          name: 'toread',
          component: BookmarksList,
          props: { pageType: 'toread' }
        }, {
          path: 'folders',
          name: 'folders',
          component: FoldersList
        }, {
          path: 'folders/:id',
          name: 'folder',
          component: BookmarksFolderPage
        }
      ]
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
