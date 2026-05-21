import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/custom-fonts.css'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')

// Fade out the splash cover once Vue has rendered its first frame
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const splash = document.getElementById('splash')
    if (splash) {
      splash.style.opacity = '0'
      setTimeout(() => splash.remove(), 600)
    }
  })
})
