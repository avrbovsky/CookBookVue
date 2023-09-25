<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from './components/Header.vue';
</script>

<template>
  <div class="h-screen">
    <Header />
    <div class="screen-view h-full w-full p-8">
      <RouterView />
    </div>
  </div>
</template>
