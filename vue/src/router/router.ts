import { createRouter, createWebHistory } from 'vue-router';
import RecipesView from '../views/RecipesView.vue';
import DetailView from '../views/DetailView.vue';
import AddEditView from '../views/AddEditView.vue';
import SideDishView from '../views/SideDishView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RecipesView,
    },
    {
      path: '/prilohy',
      component: SideDishView,
    },
    {
      path: '/detail/:id',
      component: DetailView,
    },
    {
      path: '/detail/:id/edit',
      component: AddEditView,
    },
    {
      path: '/add',
      component: AddEditView,
    },
  ],
});

export default router;
