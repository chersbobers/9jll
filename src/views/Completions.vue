<template>
  <div class="page-shell">
    <section class="panel">
      <router-link to="/" class="back-chip">Back to Home</router-link>
      <h1 class="page-title">Completions</h1>
      <p class="page-subtitle">Hardest levels beaten by 9j boys.</p>

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
  color: #fff4ff;
  background: rgba(126, 90, 155, 0.38);
}

.tier.insane {
  color: #fff7ff;
  background: rgba(178, 136, 192, 0.34);
}

.tier.hard {
  color: #fff4ff;
  background: rgba(151, 111, 177, 0.34);
}

.tier.medium {
  color: #fff7ff;
  background: rgba(228, 183, 229, 0.28);
}
</style>
