<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="header">
    <RouterLink to="/" class="flex">
      <img src="/src/assets/pig.png" class="image" alt="Prasa" />
      <div class="hidden sm:block">COOKBOOK</div>
      <img src="/src/assets/cow.png" class="image" alt="Krava" />
    </RouterLink>
    <div>
      <RouterLink to="/" class="px-2 py-2 hover:underline">Recepty</RouterLink>
      <RouterLink to="/prilohy" class="px-2 py-2 hover:underline">
        Prilohy
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.search-recipe-input {
  background-color: black;
  border: none;
}

.image {
  width: 40px;
  height: 40px;
}

.header {
  padding: 16px;
  background-color: black;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
</style>
