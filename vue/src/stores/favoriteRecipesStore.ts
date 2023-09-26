import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoriteRecipesStore = defineStore(
  'favoriteRecipes',
  () => {
    const favoriteRecipes = ref<string[]>([]);

    const addFavoriteRecipe = (id: string) => {
      favoriteRecipes.value.push(id);
    };

    const removeFavoriteRecipe = (id: string) => {
      favoriteRecipes.value = favoriteRecipes.value.filter(
        (recipe) => recipe !== id,
      );
    };

    const isFavoriteRecipe = (id: string) => {
      return favoriteRecipes.value.some((recipe) => recipe === id);
    };

    return {
      favoriteRecipes,
      addFavoriteRecipe,
      removeFavoriteRecipe,
      isFavoriteRecipe,
    };
  },
  {
    persist: true,
  },
);
