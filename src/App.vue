<template>
  <v-app>
    <DefaultLayout>
      <transition name="page-fade" mode="out-in">
        <router-view />
      </transition>
    </DefaultLayout>
  </v-app>
</template>

<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<style>


/* Global Transition shift up, looks decent I guess? */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);  
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(40px); 
}
</style>