import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import localStore from 'storejs'
import nProgress from 'nprogress'

import Home from './views/Home.vue'
import About from './views/About'
import NotFound from './views/404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/404',
      component: NotFound,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "*",
      redirect: '/404'
    }
  ]
})

if (localStore.get('?token') && store) {
  store.commit('set_token', localStore.get('token'))
}

// 路由拦截
router.beforeEach((to, from, next) => {
  nProgress.start()
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.getters.token) {
      next()
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  nProgress.done()
})

export default router