<script setup lang="ts">
import { categories, questionTypes } from "@/utils/api";
import type { Result } from "@/utils/types";
const resultsHistory: Result[] =
  JSON.parse(localStorage.getItem("resultsHistory") as string) || [];
const locale = navigator.language;
</script>

<template>
  <div class="title-container">
    <h1 class="title">Latest results</h1>
  </div>
  <div class="results-container">
    <div
      v-for="result in resultsHistory"
      :key="new Date(result.datePlayed).toDateString"
      class="result-line"
    >
      <div class="score">
        <p class="score-points">{{ result.finalScore }}</p>
      </div>
      <div class="game-info">
        <p class="result-category">
          Category:
          {{
            categories.find((category) => category.id == parseInt(result.category))?.name
          }}
        </p>
        <p class="result-type">
          Type: {{ questionTypes.find((type) => type.type == result.type)?.name }}
        </p>
        <p class="result-difficulty">Difficulty: {{ result.difficulty }}</p>
      </div>
      <div class="date">
        <p class="result-date">
          {{
            new Date(result.datePlayed).toLocaleString(locale, {
              timeZone: "UTC",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.results-container {
  display: flex;
  flex-direction: column;
}

.result-line {
  display: flex;
  align-items: center;
  height: 150px; /* Set the initial height */
}
.result-line:nth-child(2n) {
  background-color: var(--vt-c-indigo);
}

.score {
  width: 20%; /* Take 1/5 of the width */
  font-size: 3rem; /* Adjust font size as needed */
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-info {
  width: 60%; /* Take 3/5 of the width */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* font-size: clamp(0.8rem, 1.5vw, 1.2rem); */
}

.game-info p {
  margin: 1rem 0;
  padding-left: 1rem;
  font-size: 1.2rem;
  height: fit-content;
}

.game-info .result-category {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.date {
  width: 20%; /* Take 1/5 of the width */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
}

@media screen and (max-width: 500px) {
  .result-line {
    flex-direction: column;
    height: 200px;
    padding: 1rem;
  }
  .score {
    width: 100%;
    font-size: 2rem;
  }
  .game-info {
    width: 80%;
  }
  .game-info p {
    margin: 0.2rem 0;
    height: fit-content;
    font-size: 0.9em;
  }

  .game-info .result-category {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .date {
    width: 100%;
    justify-content: center;
    padding: 0.5rem 0;
  }
}
</style>
