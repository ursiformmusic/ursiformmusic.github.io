<template>
	<v-sheet class="hero" color="background">
		<!-- Background gradient + misty overlay -->
		<div class="bg-overlay" />

		<!-- Vignette edges -->
		<div class="vignette" />

		<v-container fluid class="fill-height pa-0 content-container">
			<v-row align="center" justify="center" class="h-100 ma-0">
				<v-col
					cols="12"
					sm="10"
					md="8"
					lg="6"
					class="text-center px-6 py-12 logo-fade"
				>
			
					<v-img
						
						:src="bearPawLogo"
						max-width="120"
						class="mx-auto mb-10"
						contain
					/>

					<h1
						class="title text-muted font-weight-black mb-12"
					>
						URSIFORM
					</h1>

					<!-- <p class="subtitle text-muted mb-12 subtitle-fade">
            Forest-rooted bass music from the Pacific Northwest
          </p> -->

					<!-- <v-container class="py-16">
						<v-row justify="center">
							<v-col cols="12" md="10" lg="8">
								<DefinitionCard />
							</v-col>
						</v-row>
					</v-container> -->

					<v-btn
						class="enter-btn elevation-4 btn-pulse"
						variant="outlined"
						color="accent"
						size="x-large"
						@click="enterForest"
					>
						ENTER THE FOREST
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script setup>
defineEmits(["enter"]);
import DefinitionCard from './DefinitionCard.vue';
import bearPawLogo from '@/assets/bearPawBigger.png';
import { useRouter } from 'vue-router';


const router = useRouter()

const enterForest = () => {
  // Optional: small delay for button pulse/click feel
  setTimeout(() => {
    router.push('/forest')  // ← Change to target route (e.g. /home, /music, /listen)
    // Or named route: router.push({ name: 'Forest' })
  }, 300) // 300ms feels nice with the pulse animation
}

</script>

<style scoped>

.btn-animate {
  opacity: 0;
  animation:
    fadeUp 1.8s ease-out forwards,
    pulseGlow 3s infinite alternate;
  animation-delay:
    1.2s,   /* fadeUp */
    2.2s;   /* pulseGlow starts after fade */
}


.btn-fade {
  opacity: 0;
  animation: fadeUp 1.8s ease-out forwards;
  animation-delay: 1.2s; /* comes in after logo + title */
}


.hero {
	height: 100dvh; /* Better mobile handling than 100vh */
	min-height: -webkit-fill-available;
	position: relative;
	overflow: hidden;
	background-image: url("@/assets/background.jpg");
	background-size: cover; /* Covers entire area, crops if needed */
	background-position: center; /* Centers the image */
	background-repeat: no-repeat;
	background-attachment: fixed; /* Optional: parallax-like effect on scroll (remove if not wanted) */
}

/* Optional: Darken/overlay the image for better text readability (moody forest vibe) */
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


.content-container {
	position: relative;
	z-index: 2; /* Above overlay */
	height: 100%;
}


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

/* Strong vignette for moody edges */
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

/* In <style scoped> */
.title {
	font-size: clamp(
		1.8rem,
		7vw,
		5rem
	); 
    /* mobile ~56px → grows aggressively → max ~128px on big screens */
	/* Alternative even bigger: clamp(4rem, 10vw, 9rem); → up to ~144px max */
    font-family: 'SantaGravita', serif;
	letter-spacing: 0.15em; /* keep moderate to avoid centering issues */
	text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
	line-height: 0.9;
	white-space: nowrap;
	max-width: 95vw;
	margin-left: auto;
	margin-right: auto;
	margin-right: -0.35em; 

	@media (max-width: 480px) {
		font-size: 3rem !important;
		letter-spacing: 0.18em;
	}
}

.subtitle {
	font-size: clamp(1.35rem, 3.8vw, 1.8rem); /* ← Larger & more readable */
	max-width: 640px; /* ← Gives more room to breathe */
	margin: 1.5rem auto 3rem; /* ← Better vertical spacing */
	opacity: 0.9;
	letter-spacing: 0.08em;
	font-weight: 300; /* ← Lighter feel to contrast bold title — optional */
}

/* Add breathing on mobile + fix any vh issues */
.hero {
	height: 100dvh; /* ← Better than 100vh on mobile (address bar) */
	min-height: -webkit-fill-available; /* ← Safari/iOS fallback */
}

/* Optional: scale down the whole column slightly on ultra-wide for better proportion */

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

/* Simple load-in fades */
.logo-fade,
.subtitle-fade {
	animation: fadeUp 1.8s ease-out forwards;
	opacity: 0;
}

.logo-fade {
	animation-delay: 0.4s;
}
.subtitle-fade {
	animation-delay: 0.8s;
}

.btn-pulse {
	animation: pulseGlow 3s infinite alternate;
}

@keyframes fadeUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes pulseGlow {
	from {
		box-shadow: 0 0 0 rgba(var(--v-theme-accent), 0);
	}
	to {
		box-shadow: 0 0 24px 12px rgba(var(--v-theme-accent), 0.35);
	}
}

/* Quick fix for very small screens (<450px) */
@media (max-width: 450px) {
  .title {
    font-size: 2.4rem !important;          /* readable without zoom */
    letter-spacing: 0.08em !important;     /* prevent overflow/awkward spacing */
    line-height: 1 !important;
    max-width: 90vw !important;
    padding: 0 0.4rem;                     /* tiny side breathing */
  }

  .v-col {
    padding: 0.8rem !important;            /* reduce horizontal squeeze */
  }

  .enter-btn {
    width: 100% !important;                /* full width for easy tap */
    padding: 1rem 2rem !important;
    min-width: auto !important;
    font-size: 1rem !important;
  }

  .v-img.logo-fade {
    max-width: 70px !important;            /* smaller logo on tiny screens */
    margin-bottom: 1.5rem !important;
  }

  /* Reduce vertical crowding if needed */
  .mb-6, .mb-10, .mb-12 {
    margin-bottom: 1.5rem !important;
  }
}


</style>
