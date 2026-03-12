<template>
  <div class="page-shell">
    <main class="panel home-panel">
      <p class="home-kicker">Stupid demon list</p>
      <h1 class="page-title home-title">9j Level List</h1>
      <p class="page-subtitle home-subtitle">The hub for all of 9j gd stuff!</p>

      <nav class="button-grid" aria-label="Main navigation">
        <router-link class="hero-btn" to="/level-list">
          <span class="hero-btn__title">Level List</span>
          <span class="hero-btn__meta">Levels ranked</span>
        </router-link>

        <router-link class="hero-btn" to="/completions">
          <span class="hero-btn__title">Completions</span>
          <span class="hero-btn__meta">Top levels beaten</span>
        </router-link>

        <router-link class="hero-btn" to="/players">
          <span class="hero-btn__title">Players</span>
          <span class="hero-btn__meta">9j's players</span>
        </router-link>
      </nav>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-panel {
  margin-top: min(8vh, 4rem);
  text-align: center;
}

.home-kicker {
  display: inline-block;
  border: 1px solid rgba(45, 226, 192, 0.45);
  color: var(--accent-cool);
  border-radius: 999px;
  padding: 0.25rem 0.8rem;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.home-title {
  background: linear-gradient(120deg, #fff 0%, #d5ece7 40%, #ffdcca 95%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home-subtitle {
  margin-bottom: 2.2rem;
}

.button-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}

.hero-btn {
  text-align: left;
  border: 1px solid var(--line-soft);
  border-radius: 16px;
  background: linear-gradient(140deg, rgba(255, 122, 69, 0.14), rgba(45, 226, 192, 0.1));
  padding: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.hero-btn:hover {
  transform: translateY(-3px);
  border-color: rgba(45, 226, 192, 0.7);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
}

.hero-btn__title {
  display: block;
  font-size: 1.08rem;
  font-weight: 700;
}

.hero-btn__meta {
  display: block;
  color: var(--text-muted);
  font-size: 0.88rem;
  margin-top: 0.25rem;
}

@media (min-width: 800px) {
  .button-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
