<template>
  <v-card
    class="definition-card pa-8 pa-sm-10 pa-md-12"
    elevation="0"
    rounded="lg"
  >
    <div class="text-center mb-6">
      <div class="word  text-earthy text-md-h3 font-weight-black">
        ursiform
      </div>
      <div class="part-of-speech text-subtitle-1 text-md-subtitle-1 mt-1">
        adjective
      </div>
    </div>

    <div class="pronunciation text-center mb-8 text-body-1 font-italic opacity-70">
      ur·si·form <span class="phonetic">/ˈɜːr.səˌfɔːrm/</span>
    </div>

    <v-divider class="my-6 opacity-30"></v-divider>

    <div class="definitions">
      <div class="definition-item mb-6">
        <div class="bullet">•</div>
        <div class="definition-text">
          having the shape of a bear
        </div>
      </div>

      <div class="definition-item">
        <div class="bullet">•</div>
        <div class="definition-text">
          unbothered chonky organic bass music
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>

</script>

<style scoped>
.definition-card {
  background-color: rgba(20, 25, 40, 0);     
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(4px);            
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.word {
  font-family: 'QuattrocentoRegular', serif;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.part-of-speech {
    font-family: 'QuattrocentoRegular', serif;

  text-transform: lowercase;
  /* font-variant: small-caps; */
}

.pronunciation {
  color: rgba(255, 255, 255, 0.65);
}

.phonetic {
  color: #81e6d9;                      
  font-weight: 300;
}

.definitions {
  max-width: 680px;
  margin: 0 auto;
}

.definition-item {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.bullet {
  color: #4ecdc4;                       
  font-size: 1.8rem;
  line-height: 1;
  font-weight: bold;
  flex-shrink: 0;
}

.definition-text {
  font-size: 1.125rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.9);
}

/* Responsive tweaks */
@media (max-width: 600px) {
  .definition-card {
    padding: 2rem 1.5rem !important;
  }
  .word {
    font-size: 2.75rem !important;
  }
}
</style>