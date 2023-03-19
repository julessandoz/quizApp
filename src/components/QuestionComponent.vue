<script setup lang="ts">
import { computed } from "vue";
import type { Question } from "@/utils/types";

const props = defineProps<{
  question: Question;
}>();

const emits = defineEmits<{
  (event: "answerClicked", answer: string): void;
}>();

const question = decodeURIComponent(props.question.question);

const answers = mergeAnswers(props.question);

const decodedAnswers = computed(() => {
  return answers.map((answer) => decodeURIComponent(answer));
});

const questionsAnswers =
  JSON.parse(localStorage.getItem("questionsAnswers") as string) || [];
questionsAnswers.push({
  question: question,
  answers: decodedAnswers.value,
  correctAnswer: decodeURIComponent(props.question.correct_answer),
});

localStorage.setItem("questionsAnswers", JSON.stringify(questionsAnswers));

function shuffleArray<T>(array: T[]): T[] {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function mergeAnswers(question: Question): string[] {
  const options = [question.correct_answer, ...question.incorrect_answers];
  const shuffledAnswers = shuffleArray(options);
  return shuffledAnswers;
}

function answerClicked(answer: string) {
  emits("answerClicked", answer);
}
</script>
<template>
  <div class="question-container">
    <h1>{{ question }}</h1>
  </div>
  <div class="answers-container">
    <div class="answers">
      <div
        v-for="(answer, index) in decodedAnswers"
        :key="index"
        class="answer"
        @click="answerClicked(answer)"
      >
        <p class="answer-text">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.question-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(100px, 20vh, 200px);
  width: 100%;
  border-radius: 10px;
  margin: 20px 0;
}

.question-container h1 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700 !important;
  color: var(--vt-c-text-dark-1);
  text-align: center;
  padding: 0 40px;
}

.answers-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(100px, 20vh, 500px);
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
}

.answers {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: clamp(300px, 65vw, 650px);
}

.answer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(100px, 15vh, 150px);
  width: clamp(100px, 30vw, 300px);
  background-color: var(--vt-c-light-blue);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: clamp(10px, 2vw, 20px);
  margin: 20px 5px;
  cursor: pointer;
}

.answer p.answer-text {
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 700;
  text-align: center;
  color: var(--vt-c-text-light-1);
}
</style>
