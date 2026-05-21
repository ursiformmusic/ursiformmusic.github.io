<template>
  <div class="page">
    <div class="bg-tint" />
    <div class="noise" />
    <div class="vignette" />
    <SiteNav />
    <main class="content">
      <p class="loading">loading</p>
      <p class="sub">music coming soon</p>
    </main>
  </div>
</template>

<script setup>
import SiteNav from '@/components/SiteNav.vue'
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
  opacity: 0.04;
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
  gap: 0.75rem;
}

.loading {
  font-family: 'QuattrocentoRegular', serif;
  font-size: clamp(2.2rem, 7vw, 4.5rem);
  color: rgba(150, 185, 225, 0.55);
  letter-spacing: 0.22em;
  animation: breathe 2.8s ease-in-out infinite;
}

.sub {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  color: rgba(120, 158, 205, 0.40);
  text-transform: lowercase;
}

@keyframes breathe {
  0%, 100% { opacity: 0.38; }
  50%       { opacity: 0.80; }
}
</style>
