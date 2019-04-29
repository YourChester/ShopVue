import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import { store } from './store/'
import { router } from './router/routes.js'

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.http.options.root = 'http://api/'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
