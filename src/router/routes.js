import Home from '@/views/Home.vue'
import About from '@/views/About'
import NotFound from '@/views/404'

const routes = [{
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

export default routes