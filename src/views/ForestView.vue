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
          <!-- <h1 class="title text-primary font-weight-black mb-6">
            For the forest...
          </h1> -->

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

           <v-row justify="center" class="mb-12 mt-12">
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
        </v-col>
      </v-row>

      <!-- Scrollable content below – add as much as you want -->
      <!-- <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
           
            
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
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/track"
                ></iframe>
              </v-card-text>
            </v-card> 

       
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

       
            <h2 class="text-h4 text-center mb-6">More in the Woods</h2>
            <p class="text-body-1 text-center mb-8">
              Long bio text, tracklist, upcoming events, gallery, etc.  
              This area will push the page height > 100vh and become scrollable on small screens.
            </p>

     
            <v-card elevation="2" class="mb-8">
              <v-card-title>Bio</v-card-title>
              <v-card-text>
                Ursiform draws from the ancient forests of the Pacific Northwest...  
                (add lots of text, images, lists – it will scroll)
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container> -->
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


/* Main wrapper: allow scrolling, keep background */
.hero {
  /* for scrollable do min height and remove overflow hidden and add visible */
  height: 100dvh; /* Better mobile handling than 100vh */
  /* min-height: 100dvh;                 */
  position: relative;
  min-height: -webkit-fill-available;
	overflow: hidden;             
  /* overflow: visible;    */
  background-image: url("@/assets/background1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Dark overall overlay – keep it subtle so text stays readable */
.hero::before {
	content: "";
	position: absolute;
	inset: 0;
	background: rgba(
		0,
		0,
		0,
		0.55
	); 
	z-index: 1;
}

/* Misty gradient overlay – behind content */
.bg-overlay {
	position: absolute;
	inset: 0;
	background: radial-gradient(
		circle at 40% 30%,
		rgba(58, 107, 94, 0.18) 0%,
		/* teal mist */ rgba(30, 58, 90, 0.12) 40%,
		/* navy fade */ transparent 70%
	);
	pointer-events: none;
	z-index: 1;
}

/* Vignette edges – behind content, subtle */
.vignette {
	position: absolute;
	inset: 0;
	box-shadow: inset 0 0 180px rgba(0, 0, 0, 0.92),
		inset 0 0 300px rgba(10, 15, 13, 0.85);
	pointer-events: none;
	z-index: 2;
}

/* Content always on top */
.content-container,
.hero-top,
.v-card,
.v-btn,
.title {
  position: relative;
  z-index: 10;                              /* everything here is above overlays */
}

/* Top hero-like section – fills screen but allows scrolling below */
.hero-top {
  min-height: 100dvh;
  display: flex;
  align-items: center;
}

/* Title – keep your style, no changes needed */
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

/* Rest of your animations, button styles, etc. – unchanged */
.enter-btn {
  letter-spacing: 0.25em;
  padding: 1rem 3.5rem;
  border-width: 2px;
  font-weight: 500;
}

.enter-btn:hover {
  background-color: rgba(var(--v-theme-accent), 0.12) !important;
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(122, 154, 138, 0.3);
}

/* Load-in fades – unchanged */
.logo-fade,
.subtitle-fade {
  animation: fadeUp 1.8s ease-out forwards;
  opacity: 0;
}

.logo-fade { animation-delay: 0.4s; }
.subtitle-fade { animation-delay: 0.8s; }

.btn-pulse {
  animation: pulseGlow 3s infinite alternate;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulseGlow {
  from { box-shadow: 0 0 0 rgba(var(--v-theme-accent), 0); }
  to   { box-shadow: 0 0 24px 12px rgba(var(--v-theme-accent), 0.35); }
}
</style>