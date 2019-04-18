import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// style
import '@/style/main.scss'

// svg
import '@/icons'

// api
import api from '@/api'
Vue.prototype.api = api

// base
import base from '@/utils/base'

Vue.config.productionTip = false

Vue.use(base)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
