<template>
  <div class="page-shell">
    <section class="panel">
      <router-link to="/" class="back-chip">Back to Home</router-link>
      <h1 class="page-title">Level List</h1>
      <p class="page-subtitle">Ranked levels in order, with status shorthand and movement markers.</p>

      <div class="legend-grid">
        <p><span class="pill">*</span> Work in progress</p>
        <p><span class="pill">UV</span> Unverified</p>
        <p><span class="pill">HV</span> Hackverified</p>
        <p><span class="pill">UL</span> Unlisted level</p>
        <p><span class="pill">P</span> Planned</p>
        <p><span class="pill">~⇩⇧</span> Planned move</p>
        <p><span class="pill">~⇧</span> Moved up</p>
        <p><span class="pill">~⇩</span> Moved down</p>
        <p><span class="pill">∲</span> Impossible</p>
        <p><span class="pill">¹</span> Past top one</p>
      </div>

      <ul class="rank-list">
        <li v-for="level in levels" :key="level.rank" class="rank-row">
          <span class="rank-index">#{{ level.rank }}</span>
          <div>
            <h3>
              {{ level.name }}
              <button
                type="button"
                class="pill id-pill"
                :class="{ 'id-pill--copied': copiedRank === level.rank }"
                @click="copyId(level.rank, level.id)"
              >
                {{ copiedRank === level.rank ? 'Copied!' : `ID: ${level.id}` }}
              </button>
            </h3>
            <p>Creator: {{ level.creator }} · Verifier: {{ level.verifier }}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type LevelEntry = {
  rank: number
  name: string
  creator: string
  verifier: string
  id: string
}

const copiedRank = ref<number | null>(null)

const levels: LevelEntry[] = [
  { rank: 1, name: '* 9j Journey', creator: 'Travis', verifier: 'Travis', id: 'N/A' },
  { rank: 2, name: 'Brainfog¹', creator: 'Charlie', verifier: 'Charlie', id: '133011710' },
  { rank: 3, name: '* 9j circles', creator: 'Travis', verifier: 'TBC', id: 'N/A' },
  { rank: 4, name: '* Chaoz circles', creator: 'Travis', verifier: 'TBC', id: 'N/A' },
  { rank: 5, name: 'P | Penis Extension', creator: 'Francis', verifier: 'TBC', id: 'N/A' }
]

const copyId = async (rank: number, id: string) => {
  try {
    await navigator.clipboard.writeText(id)
    copiedRank.value = rank
    window.setTimeout(() => {
      copiedRank.value = null
    }, 1100)
  } catch {
    copiedRank.value = null
  }
}
</script>

<style scoped>
.legend-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.65rem;
  margin-bottom: 1.4rem;
}

.legend-grid p {
  color: var(--text-muted);
  font-size: 0.88rem;
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  background: var(--bg-panel-strong);
  padding: 0.55rem 0.7rem;
}

.rank-list {
  list-style: none;
  display: grid;
  gap: 0.65rem;
}

.rank-row {
  display: grid;
  grid-template-columns: 62px 1fr;
  gap: 0.8rem;
  border: 1px solid var(--line-soft);
  border-radius: 14px;
  padding: 0.8rem;
  background: linear-gradient(135deg, rgba(255, 122, 69, 0.12), rgba(45, 226, 192, 0.06));
}

.rank-index {
  align-self: start;
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--accent-cool);
  font-weight: 700;
  font-size: 1rem;
  padding: 0.25rem;
}

.rank-row h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 1.05rem;
  margin-bottom: 0.2rem;
}

.rank-row p {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.id-pill {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-muted);
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.id-pill:hover {
  color: var(--text-main);
  border-color: rgba(45, 226, 192, 0.8);
}

.id-pill--copied {
  color: #081312;
  border-color: rgba(45, 226, 192, 0.9);
  background: rgba(45, 226, 192, 0.9);
}
</style>
