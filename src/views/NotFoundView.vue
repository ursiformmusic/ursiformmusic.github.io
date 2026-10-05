<template>
  <div class="page">
    <div class="bg-tint" />
    <div class="noise" />
    <div class="vignette" />
    <SiteNav />
    <main class="content">
      <div class="bear-wrap">
        <img :src="bear" alt="a small brown bear, a little lost" class="bear" />
      </div>
      <p class="code">404</p>
      <p class="heading">this path wandered off into the woods</p>
      <router-link to="/" class="home-btn">back home</router-link>
    </main>
  </div>
</template>

<script setup>
import SiteNav from '@/components/SiteNav.vue'
import bear from '@/assets/404bear.png'
</script>

<style scoped>
.page {
  min-height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #070b14;
  overflow: hidden;
}

.bg-tint {
  position: fixed;
  inset: 0;
  background: #070b14;
  z-index: 0;
}

.noise {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.042;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 175px 175px;
}

.vignette {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(4, 6, 14, 0.72) 100%);
}

.content {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  padding: 6rem 1.5rem 3rem;
  text-align: center;
}

/* Soft pale-blue glow so the dark bear reads against the night background */
.bear-wrap {
  position: relative;
  width: min(240px, 60vw);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  opacity: 0;
  animation: rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

.bear-wrap::before {
  content: '';
  position: absolute;
  inset: 4%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(150, 185, 230, 0.22) 0%, rgba(110, 150, 210, 0.08) 45%, transparent 70%);
  filter: blur(6px);
}

.bear {
  position: relative;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 10px rgba(160, 195, 240, 0.18));
  animation: sway 6s ease-in-out 1s infinite;
}

.code {
  font-family: 'SantaGravita', serif;
  font-size: clamp(2.6rem, 9vw, 3.6rem);
  letter-spacing: 0.12em;
  color: rgba(168, 200, 235, 0.72);
  opacity: 0;
  animation: rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
}

.heading {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: lowercase;
  color: rgba(135, 168, 215, 0.5);
  opacity: 0;
  animation: rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
}

.home-btn {
  margin-top: 0.8rem;
  padding: 0.82rem 2rem;
  border: 1px solid rgba(68, 102, 158, 0.2);
  background: rgba(8, 14, 30, 0.45);
  backdrop-filter: blur(10px);
  color: rgba(162, 196, 232, 0.65);
  text-decoration: none;
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.82rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0;
  animation: rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
  transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease, transform 0.25s ease;
}

.home-btn:hover {
  border-color: rgba(80, 125, 195, 0.5);
  color: #c4d5e8;
  background: rgba(14, 26, 54, 0.6);
  transform: translateY(-2px);
}

@keyframes rise {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes sway {
  0%, 100% { transform: rotate(0deg); }
  50%      { transform: rotate(-2deg) translateY(-3px); }
}

@media (prefers-reduced-motion: reduce) {
  .bear { animation: none; }
}
</style>
