<template>
  <div class="card" :class="{ visible: shown }">
    <div class="word-row">
      <span class="word">ursiform</span>
      <span class="pos">adj.</span>
    </div>
    <div class="pronunciation">/ˈɜːr.səˌfɔːrm/</div>
    <div class="divider" />
    <ul class="defs">
      <li>having the shape of a bear</li>
      <li>unbothered chonky organic bass music</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const shown = ref(false)
onMounted(() => setTimeout(() => { shown.value = true }, 500))
</script>

<style scoped>
.card {
  max-width: 480px;
  width: 100%;
  padding: 2.4rem 2.8rem;
  background: rgba(7, 12, 26, 0.82);
  border: 1px solid rgba(68, 102, 158, 0.16);
  backdrop-filter: blur(14px);
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.95s ease, transform 0.95s ease;
}

.card.visible {
  opacity: 1;
  transform: translateY(0);
}

.word-row {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.35rem;
}

.word {
  font-family: 'QuattrocentoRegular', serif;
  font-size: clamp(1.9rem, 5.5vw, 2.7rem);
  color: #c4d5e8;
  letter-spacing: -0.01em;
  line-height: 1;
}

.pos {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.82rem;
  color: rgba(130, 168, 215, 0.45);
  letter-spacing: 0.1em;
}

.pronunciation {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.88rem;
  color: #5e8fb8;
  font-style: italic;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

/* Divider bleeds warm brown into cold — the subtle earthy accent */
.divider {
  height: 1px;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(68, 102, 158, 0.30) 0%,
    rgba(110, 62, 22, 0.22) 55%,
    transparent 100%
  );
}

.defs {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.defs li {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 1.02rem;
  line-height: 1.5;
  color: rgba(178, 206, 232, 0.78);
  padding-left: 1.15rem;
  position: relative;
}

/* Brown bullet — the only place warm brown appears as a visible element */
.defs li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: rgba(130, 68, 22, 0.65);
  font-size: 1.5rem;
  line-height: 1.1;
}

@media (max-width: 480px) {
  .card { padding: 1.8rem 1.6rem; }
}
</style>
