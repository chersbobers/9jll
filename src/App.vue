<template>
  <div class="app-root">
    <div class="app-bg" aria-hidden="true">
      <Grainient
        color1="#E4B7E5"
        color2="#B288C0"
        color3="#7E5A9B"
        :time-speed="0.0"
        :color-balance="0.0"
        :warp-strength="0.0"
        :warp-frequency="0.0"
        :warp-speed="0.0"
        :warp-amplitude="50.0"
        :blend-angle="90.0"
        :blend-softness="0.02"
        :rotation-amount="0.0"
        :noise-scale="0.65"
        :grain-amount="0.1"
        :grain-scale="2.0"
        :grain-animated="false"
        :contrast="1.15"
        :gamma="1.0"
        :saturation="0.95"
        :center-x="0.0"
        :center-y="0.0"
        :zoom="0.9"
      />
    </div>

    <div class="view-layer">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Grainient from './components/Grainient.vue'
</script>

<style scoped>
.app-root {
  min-height: 100vh;
}

.app-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
}

.view-layer {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  overflow-y: auto;
}
</style>