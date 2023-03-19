<script setup lang="ts">
import TileComponent from "@/components/TileComponent.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <h1>Home</h1>
    <RouterLink :to="{ name: 'pregame' }">
      <TileComponent>
        <template v-slot:icon>
          <font-awesome-icon icon="fa-solid fa-play" size="3x" />
        </template>
        <template v-slot:text> Start Quiz </template>
      </TileComponent>
    </RouterLink>
  </main>
</template>
