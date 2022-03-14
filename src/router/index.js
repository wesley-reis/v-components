import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Toggle from '../components/Toggle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search-list',
    name: 'searchList',
    component: () => import('../components/SearchList.vue')
  },
  {
    path: '/toggle',
    name: 'toggle',
    component: Toggle
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
