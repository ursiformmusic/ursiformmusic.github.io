import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import MusicView   from '@/views/MusicView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  { path: '/',        name: 'Home',    component: LandingView },
  { path: '/forest',  redirect: '/' },
  { path: '/music',   name: 'Music',   component: MusicView   },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const redirectPath = sessionStorage.redirect
if (redirectPath) {
  sessionStorage.removeItem('redirect')
  router.replace(redirectPath)
}

export default router
