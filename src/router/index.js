import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DireitosView from '../views/DireitosView.vue'
import RelacionamentosView from '../views/RelacionamentosView.vue'
import AjudaView from '../views/AjudaView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/direitos',
    name: 'direitos',
    component: DireitosView
  },
  {
    path: '/relacionamentos',
    name: 'relacionamentos',
    component: RelacionamentosView
  },
  {
    path: '/ajuda',
    name: 'ajuda',
    component: AjudaView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router