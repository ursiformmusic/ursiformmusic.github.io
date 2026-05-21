<template>
  <nav class="nav">
    <router-link to="/" class="brand" @click="close">ursiform</router-link>

    <!-- Desktop links (hidden on mobile) -->
    <div class="desktop-links">
      <router-link to="/music"   class="nav-link">music</router-link>
      <router-link to="/contact" class="nav-link">contact</router-link>
      <span class="nav-link dim">merch</span>
    </div>

    <!-- Hamburger toggle (visible on mobile only) -->
    <button
      class="burger"
      :class="{ open: isOpen }"
      @click="toggle"
      :aria-label="isOpen ? 'close menu' : 'open menu'"
    >
      <span /><span /><span />
    </button>

    <!-- Full-screen overlay menu -->
    <Transition name="veil">
      <div v-if="isOpen" class="veil" @click.self="close">
        <div class="veil-inner">
          <router-link to="/music"   class="veil-link" style="--i:0" @click="close">music</router-link>
          <router-link to="/contact" class="veil-link" style="--i:1" @click="close">contact</router-link>
          <span                      class="veil-link dim" style="--i:2">merch</span>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route  = useRoute()

const toggle = () => (isOpen.value = !isOpen.value)
const close  = () => (isOpen.value = false)

watch(() => route.path, close)
</script>

<style scoped>
/* ── Nav bar ─────────────────────────────────────────────────── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2rem;
  background: linear-gradient(to bottom, rgba(4, 7, 16, 0.5) 0%, transparent 100%);
  pointer-events: none;
}

.brand,
.nav-link,
.burger {
  pointer-events: all;
}

.brand {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.85rem;
  letter-spacing: 0.28em;
  text-transform: lowercase;
  color: rgba(150, 180, 220, 0.42);
  text-decoration: none;
  transition: color 0.25s ease;
  z-index: 201;
  position: relative;
}

.brand:hover { color: rgba(185, 210, 240, 0.72); }

/* ── Desktop nav links ───────────────────────────────────────── */
.desktop-links {
  display: flex;
  gap: 1.8rem;
}

.nav-link {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.83rem;
  letter-spacing: 0.22em;
  text-transform: lowercase;
  color: rgba(150, 180, 220, 0.42);
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-link:not(.dim):hover { color: rgba(185, 210, 240, 0.75); }

.nav-link.dim,
.veil-link.dim {
  color: rgba(100, 130, 175, 0.22);
  cursor: default;
}

/* ── Hamburger button ────────────────────────────────────────── */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 201;
  position: relative;
}

.burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: rgba(150, 180, 220, 0.55);
  border-radius: 2px;
  transform-origin: center;
  transition:
    transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
    opacity   0.25s ease,
    background 0.25s ease;
}

/* Morph to × */
.burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
.burger.open span               { background: rgba(185, 210, 240, 0.65); }

/* ── Full-screen overlay ─────────────────────────────────────── */
.veil {
  position: fixed;
  inset: 0;
  z-index: 199;
  pointer-events: all;
  background: rgba(4, 7, 18, 0.93);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.veil-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
}

.veil-link {
  font-family: 'QuattrocentoRegular', serif;
  font-size: clamp(2rem, 9vw, 3.4rem);
  letter-spacing: 0.28em;
  text-transform: lowercase;
  color: rgba(168, 200, 235, 0.72);
  text-decoration: none;
  opacity: 0;
  transform: translateY(16px);
  animation: linkIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) calc(var(--i) * 75ms + 80ms) both;
  transition: color 0.2s ease;
}

.veil-link:not(.dim):hover { color: rgba(210, 230, 250, 0.92); }

.veil-link.dim {
  font-size: clamp(1.2rem, 5vw, 2rem);
  color: rgba(100, 130, 175, 0.22);
  cursor: default;
}

/* ── Overlay transition ──────────────────────────────────────── */
.veil-enter-active { transition: opacity 0.35s ease; }
.veil-leave-active { transition: opacity 0.28s ease; }
.veil-enter-from,
.veil-leave-to { opacity: 0; }

@keyframes linkIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsive breakpoint ───────────────────────────────────── */
@media (max-width: 640px) {
  .desktop-links { display: none; }
  .burger        { display: flex; }
  .nav           { padding: 1.1rem 1.4rem; }
}
</style>
