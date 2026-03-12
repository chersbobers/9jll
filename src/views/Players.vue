<template>
  <div class="page-shell">
    <section class="panel">
      <router-link to="/" class="back-chip">Back to Home</router-link>
      <h1 class="page-title">Players</h1>
      <p class="page-subtitle">Players with a bio image and social link (message chersbobers@jabber.today to get your profile added or charlie hinton on teams.)</p>

      <ul class="player-list">
        <li class="player-row">
          <div class="player-head">
            <img
              class="player-avatar"
              src="https://files.catbox.moe/72nxs6.png"
              alt="Travis profile picture"
            />
            <span class="pill">wpopoff of 9j top two</span>

            <h3>Travis (AtalantaBC17)</h3>
          </div>
          <p>Travis has been playing GD since 2020, when he got the Lite version on an old tablet. He got the full version for his 10th birthday, and was mainly playing easy levels or levels he found on youtube. His first demon was The Nightmare after 500 attempts, and his first medium demon was B. He then took a break from the game until 2025, when he got a laptop, and began to beat harder levels. His hardest is currently Windy Landscape, and he's going for Sweater Weather.</p>
          <div class="social-links">
            <a
              href="https://www.youtube.com/@travis17GD"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
            <img
              class="social-icon"
              src="https://ssl.gstatic.com/atari/images/sociallinks/youtube_white_28dp.png"
              alt="YouTube"
            />
            </a>
          </div>
        </li>

        <li class="player-row">
          <div class="player-head">
            <img
              class="player-avatar"
              src="https://yt3.googleusercontent.com/5Swrv8jae0uELlMM68h5mDhGAOvn7pC_rE-eLCcUe16PrhtQoIiihLHnmni4CQQP_WfzOn_O76o=s160-c-k-c0x00ffffff-no-rj"
              alt="Ben's profile picture"
            />
            <span class="pill">Lowkey zoink top one</span>
            <h3>Ben (Beanuz)</h3>
          </div>
          <p>
            🇳🇿 Gd Player
            Top 30 Nz (peak until ppl actually submitted runs)
            Hardest: Bloodbath

            I'm trash at the game so don't expect uploads often
          </p>
          <div class="social-links">
            <a
              href="https://www.youtube.com/@beanusgd"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <img
                class="social-icon"
                src="https://ssl.gstatic.com/atari/images/sociallinks/youtube_white_28dp.png"
                alt="YouTube"
              />
            </a>
          </div>
        </li>

        <li class="player-row">
          <div class="player-head">
            <img
              class="player-avatar"
              src="https://files.catbox.moe/o54m1o.png"
              alt="Charlie profile picture"
            />
            <span class="pill">top one creator</span>
            <h3>Charlie (Chersbobers)</h3>
          </div>
          <p>Charlie has been playing sense 2016 on sub zero then meltdown, He learnt that he could get lite and downloaded it. Charlie sucked at gd and stopped playing until 2024 as he bought full on steam and his phone, he stopped playing until late 2025 and is a level creator and has beaten one demon (how to spider)</p>
          <div class="social-links">
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fchers.moe&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw148p_MY8f2uQWxV1O8cB0J"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <img
                class="social-icon"
                src="https://files.catbox.moe/m0fra3.png"
                alt="Charlie website"
              />
            </a>

            <a
              href="https://reddit.com/user/Chersbobers"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <img
                class="social-icon"
                src=""
                alt="Charlie reddit"
              />
            </a>

            <a
              href="https://codeberg.org/chersbobers/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <img
                class="social-icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg25C9qvj0CKbYzzM8ftfC5LWJkx4nJQn8FQ&s"
                alt="Charlie codeberg"
              />
            </a>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts" />

<style scoped>
.legend-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1rem;
}

.player-list {
  list-style: none;
  display: grid;
  gap: 0.6rem;
}

.player-row {
  border: 1px solid var(--line-soft);
  border-radius: 14px;
  padding: 0.75rem;
  background: linear-gradient(120deg, rgba(45, 226, 192, 0.1), rgba(255, 122, 69, 0.06));
}

.player-head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.player-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--line-soft);
}

.player-head h3 {
  font-size: 1rem;
}

.player-row p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.65rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--line-soft);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
}

.social-icon {
  width: 24px;
  height: 24px;
}
</style>
