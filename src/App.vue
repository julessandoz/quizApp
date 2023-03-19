<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="QuizApp logo"
      class="logo"
      src="@/assets/logo.svg"
      width="200"
      height="125"
    />

    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home' }">
          <font-awesome-icon :icon="['fas', 'house']" size="xl" />
          Home
        </RouterLink>
        <RouterLink :to="{ name: 'highscores' }">
          <font-awesome-icon :icon="['fas', 'trophy']" size="xl" />
          Highscores
        </RouterLink>
        <RouterLink :to="{ name: 'about' }">
          <font-awesome-icon :icon="['fas', 'question']" size="xl" />
          About
        </RouterLink>
      </nav>
    </div>
  </header>
  <div class="main-content">
    <RouterView />
  </div>
</template>

<style scoped>
.main-content {
  width: 100%;
  padding: 0 5vw;
  margin-bottom: 50px;
}
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 100;
  background-color: var(--color-background);
  padding: 1vh 0;
}
.wrapper nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

div.nav-link a.router-link-active {
  color: rgb(11, 182, 220);
}
</style>
