<template>
  <v-sheet class="hero" color="background">
    <!-- Background image + misty overlay (same as hero or a deeper forest variant) -->
    <div class="bg-overlay" />

    <!-- Vignette edges for that immersive mood -->
    <div class="vignette" />

    <v-container fluid class="fill-height pa-0 content-container">
      <v-row align="center" justify="center" class="h-100 ma-0">
        <v-col cols="12" sm="10" md="8" lg="6" class="text-center px-6 py-12">


          <!-- <h1 class="title text-primary font-weight-black mb-6">
            URSIFORM
          </h1> -->

          <!-- Reuse your DefinitionCard here for continuity -->
          <div class="mb-12">
            <DefinitionCard />
          </div>

          <!-- New content: Latest Release / Player -->
          <!-- <v-card class="mb-12 mx-auto" max-width="600" elevation="4" rounded="lg">
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
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%2326a69a&auto_play=false&hide_related=false"
              ></iframe>
            </v-card-text>
          </v-card> -->

          <!-- Quick links / explore section -->
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

          <!-- Back button -->
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
    </v-container>
  </v-sheet>
</template>

<script setup>
import DefinitionCard from '@/components/DefinitionCard.vue' 

// Social media stuff that will never get clicked on anyway
const socialLinks = [
//   { text: 'Spotify', icon: 'mdi-spotify', url: 'https://open.spotify.com/artist/' },
  { text: 'SoundCloud', icon: 'mdi-soundcloud', url: 'https://soundcloud.com/ursiformmusic' },
//   { text: 'Bandcamp', icon: 'mdi-music-circle', url: 'https://ursiform.bandcamp.com/' }

]
</script>

<style scoped>

.hero {
  height: 100dvh;
  min-height: -webkit-fill-available;
  position: relative;
  overflow: hidden;
  background-image: url("@/assets/background1.jpg");  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Darken slightly more than home page */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);  /* darker for "deeper forest" feel */
  z-index: 1;
}

/* Overlays & vignette – copy from HeroSection */
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
  height: 100%;
}


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