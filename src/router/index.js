// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/LandingView.vue')  // MUST match exact file location
  },
  {
    path: '/forest',
    name: 'Forest',
    component: () => import('@/views/ForestView.vue')  // create this file!
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const redirectPath = sessionStorage.redirect
if (redirectPath) {
  sessionStorage.removeItem('redirect')
  router.replace(redirectPath)
}

export default router