<script setup lang="ts">
import type { Result } from "@/utils/types";
import { categories, questionTypes, difficulties } from "@/utils/api";
const resultsHistory: Result[] = JSON.parse(
  localStorage.getItem("resultsHistory") as string
);
const gameResults = resultsHistory[0];
console.log(gameResults);
const gameCategory = categories.find(
  (category) => category.id == parseInt(gameResults.category)
);
const gameType = questionTypes.find((type) => type.type == gameResults.type);
const gameDifficulty = difficulties.find(
  (difficulty) => difficulty.difficulty == gameResults.difficulty
);
let scoreMessage: string;
switch (gameResults.finalScore) {
  case 0:
  case 100:
    scoreMessage = "You can do better!";
    break;
  case 200:
    scoreMessage = "Not bad but better luck next time!";
    break;
  case 300:
    scoreMessage = "You're getting there!";
    break;
  case 400:
    scoreMessage = "You're almost there!";
    break;
  case 500:
    scoreMessage = "You're a true trivia master!";
    break;

  default:
    scoreMessage = "Did you cheat or something?";
    break;
}

const gameDate = new Date(gameResults.datePlayed).toLocaleString(navigator.language, {
  timeZone: "UTC",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
</script>
<template>
  <div class="title-container">
    <h1 class="title">Results</h1>
  </div>
  <div class="results-container">
    <div class="results">
      <div class="score">
        <h2 class="result-title">Final Score</h2>
        <p class="score-points">{{ gameResults.finalScore }}</p>
        <p class="score-message">{{ scoreMessage }}</p>
      </div>
      <div class="results-info">
        <div class="category result-info">
          <h2 class="result-title">Category</h2>
          <p class="result-detail">{{ gameCategory?.name }}</p>
        </div>
        <div class="type result-info">
          <h2 class="result-title">Type</h2>
          <p class="result-detail">{{ gameType?.name }}</p>
        </div>
        <div class="difficulty result-info">
          <h2 class="result-title">Difficulty</h2>
          <p class="result-detail">{{ gameDifficulty?.name }}</p>
        </div>
        <div class="date result-info">
          <h2 class="result-title">Date Played</h2>
          <p class="result-detail">{{ gameDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
}
.score {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1.8rem 0;
}
.score .score-points {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
}
.score .score-message {
  font-size: clamp(0.8rem, 3vw, 1.3rem);
  font-weight: 500;
  text-align: center;
}
.results-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 600px;
  padding: 1rem;
}
.results-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin: 1rem 2rem;
}
.result-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(100px, 30%, 200px);
  margin-bottom: 1rem;
}
.result-title {
  font-size: clamp(1rem, 5vw, 1.5rem);
  font-weight: 700;
  margin-bottom: 0.8rem;
}
.result-detail {
  font-size: clamp(0.9rem, 5vw, 1rem);
  font-weight: 500;
}
</style>
