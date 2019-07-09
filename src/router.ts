import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/input', name: 'input', component: () => import('./views/Input.vue') },
    { path: '/svg', name: 'svg', component: () => import('./views/SvgPage.vue') },
    { path: '/time', name: 'time', component: () => import('./views/TimePage.vue') },
  ]
})