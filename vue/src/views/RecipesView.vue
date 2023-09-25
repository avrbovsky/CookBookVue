<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import type { Recipe } from '@/types/recipe';

import { getRecipes } from '../api/recipes';
import RecipeCard from '../components/RecipeCard.vue';

const router = useRouter();

const recipes = ref<Recipe[]>([]);

onMounted(async () => {
  recipes.value = await getRecipes();
});
</script>

<template>
  <div>
    <div class="flex justify-between mb-8">
      <h2 class="text-4xl text-blue-500">Recepty</h2>
      <RouterLink
        to="/novy-recept"
        class="hover:bg-gray-300 border-solid border px-2 py-1 rounded-2xl text-sm border-gray-400 items-center my-auto"
      >
        Novy recept
      </RouterLink>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe._id"
        @click="router.push(`/detail/${recipe.slug}`)"
        :recipe="recipe"
      />
    </div>
  </div>
</template>
