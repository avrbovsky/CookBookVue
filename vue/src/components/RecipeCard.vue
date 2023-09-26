<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { useFavoriteRecipesStore } from '@/stores/favoriteRecipesStore';
import type { Recipe } from '@/types/recipe';
import { getTimeString } from '@/utils/timeUtils';

const router = useRouter();

const props = defineProps<{ recipe: Recipe }>();

const time = computed(() => getTimeString(props.recipe.preparationTime));

const { addFavoriteRecipe, removeFavoriteRecipe, isFavoriteRecipe } =
  useFavoriteRecipesStore();

const handleAddToFavoritesClicked = () => {
  const shouldAdd = !isFavoriteRecipe(props.recipe._id);
  if (shouldAdd) {
    addFavoriteRecipe(props.recipe._id);
  } else {
    removeFavoriteRecipe(props.recipe._id);
  }
};
</script>

<template>
  <div class="relative">
    <div class="recipe-card" @click="router.push(`/detail/${recipe.slug}`)" />
    <div
      :style="{
        backgroundColor: isFavoriteRecipe(props.recipe._id)
          ? 'rgba(255, 215, 0, 0.89)'
          : 'rgba(0,0,0,0.4)',
        color: isFavoriteRecipe(props.recipe._id) ? 'black' : 'white',
      }"
      class="p-3 absolute bottom-0 w-full z-10"
    >
      <h1
        :style="{
          color: isFavoriteRecipe(props.recipe._id) ? 'black' : 'white',
        }"
        class="truncate font-bold font-lg"
      >
        {{ recipe.title }}
      </h1>
      <p class="text-xs">{{ time ? time : 'žádné údaje' }}</p>
      <div class="flex mt-2 items-center justify-center">
        <button
          :style="{
            borderColor: isFavoriteRecipe(props.recipe._id) ? 'black' : 'white',
          }"
          class="border border-solid px-2"
          @click="handleAddToFavoritesClicked()"
        >
          {{
            isFavoriteRecipe(recipe._id)
              ? 'Remove from favorites'
              : 'Add to favorites'
          }}
        </button>
      </div>
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
  border: 1px solid lightgray;
  min-width: 250px;
  cursor: pointer;
}
</style>
