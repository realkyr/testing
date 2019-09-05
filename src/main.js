import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/register', component: Register },
  {path: '/login', component: Login },
  {path: '/', component: Home }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
