<template>
  <transition name="page-fade" mode="out-in">
    <router-view :key="$route.path" />
  </transition>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #app {
  height: 100%;
}

body {
  background: #070b14;
  color: #c4d5e8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-fade-enter-active { transition: opacity 0.35s ease; }
.page-fade-leave-active { transition: opacity 0.22s ease; }
.page-fade-enter-from,
.page-fade-leave-to     { opacity: 0; }
</style>
