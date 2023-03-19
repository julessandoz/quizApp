<script setup lang="ts">
import { computed, ref } from "vue";
import TileComponent from "@/components/TileComponent.vue";
import { categories, questionTypes, difficulties, getQuestions } from "@/utils/api";
import router from "@/router/index";
import type { Question, QuestionType, Difficulty } from "@/utils/types";

let pickedCategory = ref<number | string | null>(null),
  pickedType = ref<string | null>(null),
  pickedDifficulty = ref<string | null>(null);

let questions: Question[];

const showBtn = computed(() => {
  return !!pickedCategory.value && !!pickedType.value && !!pickedDifficulty.value;
});

function categoryClicked(id: number) {
  id == -1 ? (pickedCategory.value = " ") : (pickedCategory.value = id);
  document.querySelectorAll(".category-list .tile").forEach((tile) => {
    tile.classList.remove("selected");
  });
  document.querySelector("#cat" + id)?.classList.add("selected");
}

function typeClicked(type: string) {
  pickedType.value = type;
  document.querySelectorAll(".type-list .tile").forEach((tile) => {
    tile.classList.remove("selected");
  });
  document.querySelector("#type" + type)?.classList.add("selected");
}

function difficultyClicked(difficulty: string) {
  pickedDifficulty.value = difficulty;
  document.querySelectorAll(".difficulty-list .tile").forEach((tile) => {
    tile.classList.remove("selected");
  });
  document.querySelector("#diff" + difficulty)?.classList.add("selected");
}

async function startGame() {
  if (showBtn.value) {
    questions = await getQuestions(
      pickedType.value as QuestionType,
      pickedDifficulty.value as Difficulty,
      pickedCategory.value as string
    );

    const gameInfo = {
      categoryId: pickedCategory.value == " " ? "-1" : pickedCategory.value,
      type: pickedType.value,
      difficulty: pickedDifficulty.value,
      questions: questions,
    };

    localStorage.setItem("gameInfo", JSON.stringify(gameInfo));
  }
  console.log("Start game");
  router.push({ name: "quiz" });
}
</script>

<template>
  <div class="title">
    <h1>Set up your game</h1>
  </div>
  <div class="category">
    <h2>Choose a category</h2>
    <div class="category-list tile-list">
      <TileComponent
        v-for="category of categories"
        :id="'cat' + category.id"
        :key="category.id"
        @click="categoryClicked(category.id)"
      >
        <template v-slot:icon>
          <font-awesome-icon :icon="category.icon" size="3x" />
        </template>
        <template v-slot:text> {{ category.name }} </template>
      </TileComponent>
    </div>
  </div>
  <div class="question-type">
    <h2>Choose a question type</h2>
    <div class="type-list tile-list">
      <TileComponent
        v-for="questionType of questionTypes"
        :id="'type' + questionType.type"
        :key="questionType.id"
        @click="typeClicked(questionType.type)"
      >
        <template v-slot:icon>
          <font-awesome-icon :icon="questionType.icon" size="3x" />
        </template>
        <template v-slot:text> {{ questionType.name }} </template>
      </TileComponent>
    </div>
  </div>
  <div class="difficulty">
    <h2>Choose a difficulty</h2>
    <div class="difficulty-list tile-list">
      <TileComponent
        v-for="difficulty of difficulties"
        :id="'diff' + difficulty.difficulty"
        :key="difficulty.id"
        @click="difficultyClicked(difficulty.difficulty)"
      >
        <template v-slot:icon>
          <font-awesome-icon :icon="difficulty.icon" size="3x" />
        </template>
        <template v-slot:text> {{ difficulty.name }} </template>
      </TileComponent>
    </div>
  </div>
  <div class="submit-btn" v-show="showBtn">
    <button @click="startGame()">Start Quiz</button>
  </div>
</template>

<style scoped>
.tile-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* max-width: 100%; */
  margin: 0 auto;
}

.tile.selected {
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-white);
}

.submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-btn button {
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-white);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 30px 0;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.submit-btn button:hover {
  background-color: var(--vt-c-blue);
}
</style>
