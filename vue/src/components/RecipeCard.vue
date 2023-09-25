<script setup lang="ts">
import type { Recipe } from '@/types/recipe';

defineProps<{ recipe: Recipe }>();
</script>

<template>
  <div class="recipe-card">
    <div class="card-title">
      <h1 class="truncate">{{ recipe.title }}</h1>
      <p>{{ recipe.preparationTime }}</p>
    </div>
  </div>
</template>

<style scoped>
.recipe-card {
  background-image: url('../assets/food-placeholder.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  height: 250px;
  position: relative;
  border: 1px solid lightgray;
  min-width: 250px;
  cursor: pointer;
}

.card-title {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0px;
  width: 100%;
}

.card-title h1 {
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.card-title p {
  color: white;
  font-size: 12px;
}
</style>
