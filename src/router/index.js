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

// GitHub Pages serves public/404.html for deep links (e.g. /contact), which
// stashes the path and bounces to "/". Restore the real URL *before* the
// router starts, so its initial navigation lands on the intended page
// instead of racing a separate replace() back to "/".
const redirectPath = sessionStorage.redirect
if (redirectPath) {
  sessionStorage.removeItem('redirect')
  history.replaceState(null, '', redirectPath)
}

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
