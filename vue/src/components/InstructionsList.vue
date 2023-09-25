<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ instructions: string | undefined }>();

const instructionsList = computed(() => {
  const regexToSplit = /\d+\. /;
  const regexToReplace = /\n/;
  const replacedString = props.instructions?.replace(regexToReplace, '');
  const splittedString = replacedString?.split(regexToSplit).filter(Boolean);
  return splittedString;
});
</script>

<template>
  <ul>
    <li
      class="flex gap-2 py-2"
      v-for="(instruction, index) in instructionsList"
      :key="index"
    >
      <div
        class="flex shrink-0 w-8 h-8 items-center justify-center bg-blue-400 text-white rounded-full"
      >
        {{ index + 1 }}
      </div>
      <p class="my-auto">
        {{ instruction }}
      </p>
    </li>
  </ul>
</template>
