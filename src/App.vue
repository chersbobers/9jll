<template>
  <Balatro :is-rotate="false" :mouse-interaction="false" :pixel-filter="700" />
  <div class="view-layer">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Balatro from './components/Balatro.vue'
</script>

<style scoped>
.view-layer {
  position: fixed;
  inset: 0;
  z-index: 200;
  overflow-y: auto;
}
</style>