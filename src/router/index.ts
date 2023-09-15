import { createRouter, createWebHistory } from 'vue-router'
import { Home } from '@/pages'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, 
    },
  ],
})

export default router
