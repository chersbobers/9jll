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
            <div class="player-title-row">
              <h3>Travis (AtalantaBC17)</h3>
              <div class="social-links social-links--inline">
                <a
                  href="https://www.youtube.com/@travis17GD"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  aria-label="Travis YouTube"
                >
                  <img
                    class="social-icon"
                    :src="youtubeIcon"
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>
          </div>
          <p>Travis has been playing GD since 2020, when he got the Lite version on an old tablet. He got the full version for his 10th birthday, and was mainly playing easy levels or levels he found on youtube. His first demon was The Nightmare after 500 attempts, and his first medium demon was B. He then took a break from the game until 2025, when he got a laptop, and began to beat harder levels. His hardest is currently Windy Landscape, and he's going for Sweater Weather.</p>
        </li>

        <li class="player-row">
          <div class="player-head">
            <img
              class="player-avatar"
              src="https://yt3.googleusercontent.com/5Swrv8jae0uELlMM68h5mDhGAOvn7pC_rE-eLCcUe16PrhtQoIiihLHnmni4CQQP_WfzOn_O76o=s160-c-k-c0x00ffffff-no-rj"
              alt="Ben's profile picture"
            />
            <span class="pill">Lowkey zoink top one</span>
            <div class="player-title-row">
              <h3>Ben (Beanuz)</h3>
              <div class="social-links social-links--inline">
                <a
                  href="https://www.youtube.com/@beanusgd"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  aria-label="Ben YouTube"
                >
                  <img
                    class="social-icon"
                    :src="youtubeIcon"
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>
          </div>
          <p>
            🇳🇿 Gd Player
            Top 30 Nz (peak until ppl actually submitted runs)
            Hardest: Bloodbath

            I'm trash at the game so don't expect uploads often
          </p>
        </li>

        <li class="player-row">
          <div class="player-head">
            <img
              class="player-avatar"
              src="https://files.catbox.moe/o54m1o.png"
              alt="Charlie profile picture"
            />
            <span class="pill">top one creator</span>
            <div class="player-title-row">
              <h3>Charlie (Chersbobers)</h3>
              <div class="social-links social-links--inline">
                <a
                  href="https://reddit.com/user/Chersbobers"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  aria-label="Charlie Reddit"
                >
                  <img
                    class="social-icon"
                    :src="redditIcon"
                    alt="Charlie Reddit"
                  />
                </a>
                <a
                  href="https://www.google.com/url?q=https%3A%2F%2Fchers.moe&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw148p_MY8f2uQWxV1O8cB0J"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  aria-label="Charlie Website"
                >
                  <img
                    class="social-icon"
                    :src="websiteIcon"
                    alt="Charlie website"
                  />
                </a>
                <a
                  href="https://codeberg.org/chersbobers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                  aria-label="Charlie Codeberg"
                >
                  <img
                    class="social-icon"
                    :src="codebergIcon"
                    alt="Charlie codeberg"
                  />
                </a>
              </div>
            </div>
          </div>
          <p>Charlie has been playing since 2016 on sub zero then meltdown, He learnt that he could get lite and downloaded it. Charlie sucked at gd and stopped playing until 2024 as he bought full on steam and his phone, he stopped playing until late 2025 and is a level creator and has beaten one demon (how to spider)</p>
        </li>
        
        <li class="player-row">
          <div class="player-head">
            <img
              class="player-avatar"
              src="https://files.catbox.moe/3n2kd4.jpg"
              alt="Ethans's profile picture"
            />
            <span class="pill">He's a player</span>
            <div class="player-title-row">
              <h3>Ethan (jej9zi2)</h3>
              <div class="social-links social-links--inline">  

              </div>
            </div>
          </div>
          <p>
            Im Ethan, I have played since 2023. My hardest is Deadlocked in 2.5 thousand attempts.
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import codebergIcon from '../assets/codeberg-doodle.svg'
import redditIcon from '../assets/reddit.svg'
import websiteIcon from '../assets/website-doodle.svg'
import youtubeIcon from '../assets/youtube-doodle.svg'
</script>

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
  background: linear-gradient(120deg, rgba(228, 183, 229, 0.18), rgba(126, 90, 155, 0.12));
}

.player-head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.player-title-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
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
  line-height: 1.5;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.65rem;
}

.social-links--inline {
  margin-top: 0;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 13px 10px 14px 9px;
  background: rgba(228, 183, 229, 0.24);
  transform: rotate(-3deg);
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.social-link:hover {
  transform: rotate(0deg) translateY(-2px);
  border-color: rgba(255, 255, 255, 0.85);
  background: rgba(178, 136, 192, 0.34);
}

.social-links .social-link:nth-child(even) {
  transform: rotate(2.5deg);
}

.social-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 640px) {
  .player-title-row {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
