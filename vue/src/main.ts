import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import { queryClient } from '@/api/queryClient';

import App from './App.vue';

import './assets/main.css';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

app.use(pinia);
app.use(VueQueryPlugin, { queryClient });
// app.use(router);

app.mount('#app');
