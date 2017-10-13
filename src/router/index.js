import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import DashboardLayout from '../components/Dashboard/DashboardLayout.vue'

import NotFound from '../pages/NotFoundPage.vue'
import Login from '../pages/Login.vue'
import BookmarksRegister from 'src/pages/BookmarksRegister.vue'

import BookmarksHome from 'src/pages/BookmarksHome.vue'
import BookmarksList from 'src/pages/BookmarksList.vue'
import BookmarksCategories from 'src/pages/BookmarksCategories.vue'
import BookmarksFolders from 'src/pages/BookmarksFolders.vue'
import Folder from 'src/components/Folder.vue'
import Category from 'src/components/Category.vue'
import BookmarksWebsites from 'src/pages/BookmarksWebsites.vue'
import BookmarksUserProfile from 'src/pages/BookmarksUserProfile.vue'

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
          path: 'categories',
          name: 'categories',
          component: BookmarksCategories
        }, {
          path: 'categories/:id',
          name: 'category',
          component: Category
        }, {
          path: 'folders',
          name: 'folders',
          component: BookmarksFolders
        }, {
          name: 'folder',
          path: 'folders/:id',
          component: Folder
        }, {
          path: 'websites',
          name: 'websites',
          component: BookmarksWebsites
        }, {
          path: 'search',
          name: 'search',
          component: BookmarksUserProfile
        }, {
          path: 'me',
          name: 'user profile',
          component: BookmarksUserProfile
        }
      ]
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
