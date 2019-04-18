import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import localStore from 'storejs'
import nProgress from 'nprogress'

import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
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