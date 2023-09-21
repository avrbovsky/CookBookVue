import { api } from '@/api/setup';
import type { AddRecipe, Recipe } from '@/types/recipe';

export const getRecipes = (signal?: AbortSignal) => {
  return api.get<Recipe[]>('/recipes', { signal });
};

export const getRecipe = (id: string, signal?: AbortSignal) => {
  return api.get<Recipe>(`/recipes/${id}`, { signal });
};

export const getIngredients = (signal?: AbortSignal) => {
  return api.get<string[]>('/recipes/ingredients', { signal });
};

export const getSideDishes = (signal?: AbortSignal) => {
  return api.get<string[]>('/recipes/side-dishes', { signal });
};

export const addRecipe = (params: AddRecipe) => {
  return api.post<Recipe>('/recipes', { params });
};

export const updateRecipe = (id: string, params: AddRecipe) => {
  return api.post<Recipe>(`/recipes/${id}`, { params });
};

export const deleteRecipe = (id: string) => {
  return api.delete(`/recipes/${id}`);
};
