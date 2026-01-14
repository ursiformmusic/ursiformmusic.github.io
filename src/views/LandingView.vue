<template>
  <HeroSection @enter="enterForest" />
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const enterForest = () => {
  router.push('/forest')  
  console.log('Entering the forest...')
}
</script>