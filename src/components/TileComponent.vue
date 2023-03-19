<script setup lang="ts"></script>

<template>
  <div class="tile">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="content">
      <h2><slot name="text"></slot></h2>
    </div>
  </div>
</template>

<style scoped>
div.tile {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: clamp(200px, 30vw, 300px);
  height: clamp(100px, 20vh, 300px);
  background-color: var(--vt-c-light-blue);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 0 20px;
  margin: 20px 0;
  color: var(--vt-c-text-light-1);
  cursor: pointer;
}

div.icon {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20% 0 0 0;
}

div.content {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.content h2 {
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
}
</style>
