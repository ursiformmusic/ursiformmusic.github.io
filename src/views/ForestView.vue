<template>
  <v-sheet class="hero" color="background">
    <!-- Background + overlays (same moody vibe) -->
    <div class="bg-overlay" />
    <div class="vignette" />

    <!-- Main content – now scrollable -->
    <v-container fluid class="pa-0">
      <!-- Top hero-like section: fills screen but doesn't lock the page -->
      <v-row align="center" justify="center" class="hero-top min-vh-100">
        <v-col cols="12" sm="10" md="8" lg="6" class="text-center px-6 py-12">
          <!-- Big title -->
          <h1 class="title text-primary font-weight-black mb-6">
            ENTER THE FOREST
          </h1>

          <!-- Your DefinitionCard -->
          <div class="mb-12">
            <DefinitionCard />
          </div>

          <!-- Back button (keep it here or move lower if you want) -->
          <v-btn
            to="/"
            variant="text"
            color="primary"
            size="large"
            class="mt-8"
          >
            ← Return to Ursiform
          </v-btn>
        </v-col>
      </v-row>

      <!-- Scrollable content below – add as much as you want -->
      <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <!-- Example: Latest Release -->
            <v-card class="mb-12" elevation="4" rounded="lg">
              <v-card-title class="text-h5 text-center">Latest Drop</v-card-title>
              <v-card-text class="text-center">
                <p class="mb-4">Chonky Roots • 2025</p>
                <v-img
                  src="@/assets/album-cover.jpg"
                  height="300"
                  class="rounded-lg mx-auto mb-6"
                  alt="Album Cover"
                />
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%2326a69a&auto_play=false"
                ></iframe>
              </v-card-text>
            </v-card>

            <!-- Social links -->
            <v-row justify="center" class="mb-12">
              <v-col cols="auto">
                <v-btn
                  v-for="link in socialLinks"
                  :key="link.text"
                  :href="link.url"
                  target="_blank"
                  variant="outlined"
                  color="accent"
                  size="large"
                  class="ma-3"
                >
                  <v-icon :icon="link.icon" left />
                  {{ link.text }}
                </v-btn>
              </v-col>
            </v-row>

            <!-- Add more sections here – they will scroll -->
            <h2 class="text-h4 text-center mb-6">More in the Woods</h2>
            <p class="text-body-1 text-center mb-8">
              Long bio text, tracklist, upcoming events, gallery, etc.  
              This area will push the page height > 100vh and become scrollable on small screens.
            </p>

            <!-- Example extra tall content -->
            <v-card elevation="2" class="mb-8">
              <v-card-title>Bio</v-card-title>
              <v-card-text>
                Ursiform draws from the ancient forests of the Pacific Northwest...  
                (add lots of text, images, lists – it will scroll)
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-sheet>
</template>

<script setup>
import DefinitionCard from '@/components/DefinitionCard.vue'

const socialLinks = [
  { text: 'SoundCloud', icon: 'mdi-soundcloud', url: 'https://soundcloud.com/ursiformmusic' },
  // add others later
]
</script>

<style scoped>

  .hero {
  min-height: 100dvh;                       /* ← Changed: min instead of fixed height */
  position: relative;
  overflow: visible;                        /* ← Allows content to overflow & scroll */
  background-image: url("@/assets/background1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 40% 30%,
    rgba(58, 107, 94, 0.25) 0%,
    rgba(30, 58, 90, 0.18) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 1;
}

.vignette {
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 180px rgba(0, 0, 0, 0.92),
              inset 0 0 300px rgba(10, 15, 13, 0.85);
  pointer-events: none;
  z-index: 2;
}

.content-container {
  position: relative;
  z-index: 3;
  min-height: 100dvh;                       /* ← min-height so top looks full-screen */
}

/* Title (keep your existing style, just add this if needed) */
.title {
  /* your current title styles... */
}

/* Rest of your animations, button, etc. stay the same */
/* Keep overlays/vignette */
.bg-overlay, .vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.hero-top {
  
  min-height: 100dvh;          /* Top part feels like full-screen hero */
  display: flex;
  align-items: center;
}

/* Page can now grow beyond one screen */
.v-sheet {
  min-height: 100dvh;          /* at least full height */
}

/* Reuse title style from hero */
.title {
  font-size: clamp(2.5rem, 3vw, 6rem);
  font-family: 'SantaGravita', serif;
  letter-spacing: 0.15em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  line-height: 0.9;
  white-space: nowrap;
  max-width: 95vw;
  margin-left: auto;
  margin-right: auto;
  margin-right: -0.35em;
}
</style>