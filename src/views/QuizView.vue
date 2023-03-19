<script setup lang="ts">
import QuestionComponent from "@/components/QuestionComponent.vue";
import { ref, computed } from "vue";
import router from "@/router/index";
import type { Question, Result, GameInfo } from "@/utils/types";

const gameInfo: GameInfo = JSON.parse(localStorage.getItem("gameInfo") as string);
const questions: Question[] = gameInfo.questions;
const hideQuestion = ref(false);

const currentQuestionIndex = ref(0);
const currentQuestion = computed(() => {
  return questions[currentQuestionIndex.value];
});
const points = ref(0);

function nextQuestion(pickedAnswer: string) {
  checkAnswer(pickedAnswer, currentQuestion.value.correct_answer);
  if (currentQuestionIndex.value === questions.length - 1) {
    currentQuestionIndex.value = 0;
    hideQuestion.value = true;
    finishGame();
  } else {
    currentQuestionIndex.value++;
  }
}

function checkAnswer(answer: string, correctAnswer: string) {
  if (answer === decodeURIComponent(correctAnswer)) {
    points.value += 100;
  } else {
    points.value += 0;
  }
}

function finishGame() {
  const resultsHistory: Result[] =
    JSON.parse(localStorage.getItem("resultsHistory") as string) || [];
  const newResult: Result = {
    category: gameInfo.category,
    type: gameInfo.type,
    difficulty: gameInfo.difficulty,
    finalScore: points.value,
    datePlayed: new Date(),
  };
  resultsHistory.unshift(newResult);
  localStorage.setItem("resultsHistory", JSON.stringify(resultsHistory));
  localStorage.removeItem("gameInfo");
  localStorage.removeItem("questions");
  router.push({ name: "results" });
}
</script>

<template>
  <div v-if="!hideQuestion">
    <QuestionComponent
      :question="currentQuestion"
      :key="currentQuestionIndex"
      @answerClicked="nextQuestion"
    ></QuestionComponent>
  </div>
</template>

<style></style>
