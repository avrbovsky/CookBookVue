<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

import { useFavoriteRecipesStore } from '@/stores/favoriteRecipesStore';
import type { Recipe } from '@/types/recipe';

import { getRecipes } from '../api/recipes';
import RecipeCard from '../components/RecipeCard.vue';

const recipes = ref<Recipe[]>([]);
const searchedValue = ref<string>('');
const isFavorites = ref<boolean>(false);
const favoriteRecipesStore = useFavoriteRecipesStore();

const toggleFavorites = () => {
  isFavorites.value = !isFavorites.value;
};

const allRecipes = computed(() => {
  if (isFavorites.value) {
    const favorites = recipes.value.filter((recipe) =>
      favoriteRecipesStore.favoriteRecipes.includes(recipe._id),
    );
    return favorites.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchedValue.value.toLowerCase()),
    );
  }

  return recipes.value.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchedValue.value.toLowerCase()),
  );
});

onMounted(async () => {
  recipes.value = await getRecipes();
});
</script>

<template>
  <div>
    <div class="flex justify-between mb-8">
      <h2 class="text-4xl text-blue-500">Recepty</h2>
      <RouterLink
        to="/add"
        class="hover:bg-gray-300 border-solid border px-2 py-1 rounded-2xl text-sm border-gray-400 items-center my-auto"
      >
        Novy recept
      </RouterLink>
    </div>
    <div class="flex">
      <input
        type="text"
        placeholder="Hledat..."
        class="search-recipe-input h-10 mr-1 my-2 w-full"
        v-model="searchedValue"
      />
      <button
        @click="toggleFavorites"
        class="w-40 border border-solid px-2 py-1 border-blue-500 hover:bg-blue-300 my-auto h-10"
      >
        {{ isFavorites ? 'All' : 'Favorites' }}
      </button>
    </div>
    <div
      class="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <RecipeCard
        v-for="recipe in allRecipes"
        :key="recipe._id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>
