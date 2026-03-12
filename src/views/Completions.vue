<template>
  <div class="page-shell">
    <section class="panel">
      <router-link to="/" class="back-chip">Back to Home</router-link>
      <h1 class="page-title">Completions</h1>
      <p class="page-subtitle">Recent clears from the list journey.</p>

      <ul class="completions-grid">
        <li v-for="entry in completions" :key="entry.name" class="completion-card">
          <h3>{{ entry.name }}</h3>
          <span :class="['tier', entry.tier]">{{ entry.difficulty }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const completions = [
  { name: 'XO', difficulty: 'Extreme Demon', tier: 'extreme' },
  { name: 'Bloodbath', difficulty: 'Extreme Demon', tier: 'extreme' },
  { name: 'Sweater Weather', difficulty: 'Extreme Demon', tier: 'extreme' },
  { name: 'ACU', difficulty: 'Extreme Demon', tier: 'extreme' },
  { name: 'Windy Landscape', difficulty: 'Insane Demon', tier: 'insane' },
  { name: 'Magma Bound', difficulty: 'Insane Demon', tier: 'insane' },
  { name: 'Future Funk', difficulty: 'Hard Demon', tier: 'hard' },
  { name: 'Sakupen Egg', difficulty: 'Medium Demon', tier: 'medium' },
  { name: 'B', difficulty: 'Medium Demon', tier: 'medium' }
]
</script>

<style scoped>
.completions-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.75rem;
}

.completion-card {
  border: 1px solid var(--line-soft);
  border-radius: 15px;
  padding: 0.9rem;
  background: var(--bg-panel-strong);
}

.completion-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.tier {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.2rem 0.65rem;
  font-size: 0.78rem;
  font-weight: 700;
}

.tier.extreme {
  color: #ffb8ac;
  background: rgba(255, 88, 46, 0.2);
}

.tier.insane {
  color: #c0fff2;
  background: rgba(45, 226, 192, 0.2);
}

.tier.hard {
  color: #ffdba7;
  background: rgba(255, 165, 74, 0.2);
}

.tier.medium {
  color: #fff0af;
  background: rgba(255, 209, 102, 0.2);
}
</style>
