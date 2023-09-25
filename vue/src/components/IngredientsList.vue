<script setup lang="ts">
import type { Ingredient } from '@/types/recipe';

defineProps<{ ingredients: Ingredient[] | undefined }>();
</script>

<template>
  <div>
    <div class="grid grid-cols divide-y">
      <div
        v-for="ingredient in ingredients"
        :key="ingredient._id"
        class="flex gap-4 p-2"
      >
        <p class="w-20">{{ ingredient.amount }} {{ ingredient.amountUnit }}</p>
        <p>{{ ingredient.name }}</p>
      </div>
    </div>
  </div>
</template>
