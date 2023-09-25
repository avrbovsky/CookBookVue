<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { deleteRecipe, getRecipe } from '@/api/recipes';
import IngredientsList from '@/components/IngredientsList.vue';
import InstructionsList from '@/components/InstructionsList.vue';
import type { Recipe } from '@/types/recipe';
import { getTimeString } from '@/utils/timeUtils';

const { params } = useRoute();
const { id } = params;
const recipe = ref<Recipe>();

const time = computed(() => getTimeString(recipe.value?.preparationTime));
const router = useRouter();

onMounted(async () => {
  recipe.value = await getRecipe(id as string);
  console.log(recipe.value.directions);
});

const shouldRenderInfo = computed(() => recipe.value?.preparationTime);
const handleRemove = async () => {
  await deleteRecipe(recipe.value?._id as string).then(() => router.push('/'));
};
</script>

<template>
  <div>
    <div class="flex justify-between mb-8">
      <h2 class="text-4xl text-blue-500">{{ recipe?.title }}</h2>
      <div>
        <button
          class="border-gray-400 border border-solid px-2 py-1 rounded-2xl items-center mr-1 hover:bg-gray-300"
          @click="router.push(`/detail/${id}/edit`)"
        >
          Upravit
        </button>
        <button
          class="border-red-600 bg-red-500 border border-solid px-2 py-1 rounded-2xl items-center hover:bg-red-600 text-white"
          @click="handleRemove"
        >
          Smazat
        </button>
      </div>
    </div>
    <p v-if="shouldRenderInfo">
      {{ time }}
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-8">
      <IngredientsList
        class="col-span-2 lg:col-span-1"
        :ingredients="recipe?.ingredients"
      />
      <InstructionsList
        class="col-span-2 lg:col-span-3"
        :instructions="recipe?.directions"
      />
    </div>
  </div>
</template>
