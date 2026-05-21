<template>
  <div class="page">
    <!-- Background layers -->
    <div class="bg-image" />
    <div class="bg-tint" />
    <div class="noise" />
    <div class="vignette" />

    <SiteNav />

    <main class="main">
      <!-- Logo / title -->
      <div class="logo-wrap">
        <!--
          TODO: Once you drop the new logo PNG into src/assets/, swap the <h1> for:
          <img src="@/assets/logoSticker.png" alt="Ursiform" class="logo-img" />

          CSS filter to make a dark/navy PNG appear light on dark bg:
            filter: brightness(0) invert(1) opacity(0.88);
        -->
        <!-- <h1 class="logo-text">URSIFORM</h1> -->
                  <img src="@/assets/logoSticker.png" alt="Ursiform" class="logo-img" />
      </div>

      <!-- Definition card -->
      <DefinitionCard />

      <!-- Music platform links -->
      <div class="platforms">
        <a href="https://open.spotify.com/artist/6wFEizOIcd2MRrYk0rCBze" target="_blank" rel="noopener noreferrer" class="platform-btn">
          <svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          Spotify
        </a>
        <a href="https://music.apple.com/us/artist/ursiform/1896668230" target="_blank" rel="noopener noreferrer" class="platform-btn">
          <svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
          Apple Music
        </a>
        <a href="https://soundcloud.com/ursiformmusic" target="_blank" rel="noopener noreferrer" class="platform-btn">
          <svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M1.175 12.225c-.041 0-.075.033-.079.075l-.419 2.797.419 2.771c.004.042.038.075.079.075.04 0 .074-.033.079-.075l.477-2.771-.477-2.797c-.005-.042-.039-.075-.079-.075zm1.28-.52c-.047 0-.086.039-.09.086l-.363 3.306.363 3.266c.004.047.043.086.09.086.046 0 .085-.039.09-.086l.413-3.266-.413-3.306c-.005-.047-.044-.086-.09-.086zm1.295-.09c-.053 0-.097.044-.101.098l-.307 3.395.307 3.349c.004.054.048.098.101.098.053 0 .097-.044.101-.098l.348-3.349-.348-3.395c-.004-.054-.048-.098-.101-.098zm1.293-.039c-.06 0-.109.049-.113.109l-.25 3.433.25 3.387c.004.06.053.109.113.109.059 0 .108-.049.113-.109l.283-3.387-.283-3.433c-.005-.06-.054-.109-.113-.109zm1.293.031c-.066 0-.121.055-.125.121l-.192 3.403.192 3.358c.004.066.059.121.125.121.065 0 .12-.055.124-.121l.218-3.358-.218-3.403c-.004-.066-.059-.121-.124-.121zm1.293-.03c-.073 0-.133.06-.137.133l-.135 3.433.135 3.388c.004.073.064.133.137.133.072 0 .132-.06.136-.133l.153-3.388-.153-3.433c-.004-.073-.064-.133-.136-.133zm1.293.039c-.08 0-.146.066-.15.146l-.077 3.394.077 3.356c.004.08.07.146.15.146.079 0 .145-.066.149-.146l.088-3.356-.088-3.394c-.004-.08-.07-.146-.149-.146zm1.293-.097c-.086 0-.158.072-.162.158l-.02 3.491.02 3.44c.004.086.076.158.162.158.085 0 .157-.072.161-.158l.022-3.44-.022-3.491c-.004-.086-.076-.158-.161-.158zm1.293.059c-.093 0-.17.077-.174.17l.035 3.432-.035 3.388c.004.093.081.17.174.17.092 0 .169-.077.173-.17l.04-3.388-.04-3.432c-.004-.093-.081-.17-.173-.17zm5.879 1.607c-.317 0-.621.061-.901.17-.186-2.165-1.999-3.852-4.208-3.852-.572 0-1.117.112-1.613.312-.191.076-.243.154-.245.226v7.527c.002.074.06.135.135.137h6.832c.433 0 .785-.352.785-.785v-2.95c0-1.397-1.134-2.785-2.785-2.785z"/>
          </svg>
          SoundCloud
        </a>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="email-signup">
        <label class="email-label" for="email-input">stay in the forest</label>
        <form class="email-row" @submit.prevent="subscribe" novalidate>
          <input
            id="email-input"
            v-model="email"
            type="email"
            placeholder="your@email.com"
            class="email-input"
            autocomplete="email"
            :disabled="status === 'loading' || status === 'success'"
          />
          <button
            class="email-btn"
            type="submit"
            aria-label="Subscribe"
            :disabled="status === 'loading' || status === 'success'"
          >{{ status === 'loading' ? '…' : '↗' }}</button>
        </form>
        <p v-if="status === 'success'" class="email-status ok">you're in</p>
        <p v-else-if="status === 'error'" class="email-status err">something went wrong — try again</p>
      </div>
      <p class="footer-copy">ursiform · {{ year }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SiteNav from '@/components/SiteNav.vue'
import DefinitionCard from '@/components/DefinitionCard.vue'

const year = new Date().getFullYear()
const email  = ref('')
const status = ref('idle') // idle | loading | success | error

async function subscribe() {
  if (!email.value || status.value === 'loading') return
  status.value = 'loading'
  try {
    const res = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': 'Token 3332784c-be7f-4251-92a9-0c2e3ec10245',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email.value }),
    })
    status.value = res.ok ? 'success' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<style scoped>
/* ── Page shell ─────────────────────────────────────────────── */
.page {
  min-height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: #070b14;
}

/* ── Background layers ──────────────────────────────────────── */
.bg-image {
  position: fixed;
  inset: 0;
  z-index: 0;
  /*
    TODO: Replace background1.jpg with one of your artwork images:
      - 3rdPost.jpg  → misty mirrored forest (atmospheric, recommended)
      - 8thPost.jpg  → symmetric blue ice clouds (more dramatic/DMT)
    Add the file to src/assets/ and update the path.
  */
  /* background-image: url("@/assets/background1.jpg"); */
  background-image: url("@/assets/3rdPost.jpg");
  background-size: cover;
  background-position: center 35%;
  background-repeat: no-repeat;
}

.bg-tint {
  position: fixed;
  inset: 0;
  z-index: 1;
  background: rgba(5, 8, 18, 0.68);
}

.noise {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0.042;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 175px 175px;
}

.vignette {
  position: fixed;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background: radial-gradient(ellipse at 50% 42%, transparent 30%, rgba(4, 6, 14, 0.68) 100%);
  box-shadow:
    inset 0 0 100px rgba(3, 5, 14, 0.88),
    inset 0 0 220px rgba(3, 5, 14, 0.52);
}

/* ── Main content ────────────────────────────────────────────── */
.main {
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem 1.5rem 3rem;
  gap: 2.8rem;
}

/* ── Logo / title ────────────────────────────────────────────── */
.logo-wrap {
  text-align: center;
  animation: fadeUp 1.2s ease-out both;
  animation-delay: 0.2s;
}

.logo-text {
  font-family: 'SantaGravita', serif;
  font-size: clamp(3.2rem, 13vw, 7.8rem);
  color: rgba(196, 215, 235, 0.88);
  letter-spacing: 0.12em;
  line-height: 1;
  text-shadow:
    0 0 80px rgba(55, 95, 165, 0.22),
    0 2px 35px rgba(0, 0, 0, 0.75);
  white-space: nowrap;
}

/* Logo PNG — max-height trims transparent padding baked into the PNG file */
.logo-img {
  max-width: clamp(300px, 62vw, 580px);
  max-height: 140px;
  width: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1) opacity(0.88);
  display: block;
  margin: 0 auto;
}

/* ── Platform links ──────────────────────────────────────────── */
.platforms {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  animation: fadeUp 1.2s ease-out both;
  animation-delay: 0.85s;
}

.platform-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.58rem 1.4rem;
  border: 1px solid rgba(72, 108, 165, 0.26);
  background: rgba(8, 14, 30, 0.40);
  backdrop-filter: blur(8px);
  color: rgba(160, 195, 230, 0.65);
  text-decoration: none;
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease, transform 0.25s ease;
}

.platform-btn:hover {
  border-color: rgba(80, 125, 195, 0.55);
  color: #c4d5e8;
  background: rgba(14, 26, 54, 0.60);
  transform: translateY(-2px);
}

.platform-icon {
  width: 15px;
  height: 15px;
  opacity: 0.65;
  flex-shrink: 0;
}


/* ── Footer ──────────────────────────────────────────────────── */
.footer {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1.5rem 2.2rem;
  border-top: 1px solid rgba(55, 85, 145, 0.1);
}

.email-signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
}

.email-label {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: lowercase;
  color: rgba(155, 185, 225, 0.52);
  cursor: default;
}

.email-row {
  display: flex;
}

.email-input {
  width: 210px;
  padding: 0.52rem 0.9rem;
  background: rgba(8, 14, 30, 0.52);
  border: 1px solid rgba(55, 85, 145, 0.22);
  border-right: none;
  color: rgba(172, 204, 235, 0.80);
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  outline: none;
  transition: border-color 0.25s ease;
}

.email-input::placeholder {
  color: rgba(110, 148, 200, 0.45);
}

.email-input:focus {
  border-color: rgba(65, 105, 165, 0.48);
}

.email-btn {
  padding: 0.52rem 0.95rem;
  background: rgba(18, 34, 68, 0.52);
  border: 1px solid rgba(55, 85, 145, 0.22);
  color: rgba(140, 178, 222, 0.55);
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
}

.email-btn:hover {
  background: rgba(32, 58, 110, 0.65);
  color: rgba(172, 210, 248, 0.88);
}

.email-btn:disabled { opacity: 0.5; cursor: default; }

.email-status {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: lowercase;
}
.email-status.ok  { color: rgba(140, 195, 160, 0.72); }
.email-status.err { color: rgba(210, 120, 100, 0.72); }

.footer-copy {
  font-family: 'QuattrocentoRegular', serif;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: rgba(115, 150, 200, 0.38);
  text-transform: lowercase;
}

/* ── Animations ──────────────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Mobile ──────────────────────────────────────────────────── */
@media (max-width: 480px) {
  .main { padding: 5.5rem 1rem 2.5rem; gap: 2.2rem; }
  .logo-text { white-space: normal; text-align: center; font-size: clamp(2.4rem, 14vw, 4rem); }
  .email-input { width: 165px; }
}
</style>
