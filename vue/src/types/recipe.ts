export type Recipe = {
  _id: string;
  title: string;
  preparationTime?: number;
  servingCount?: number;
  directions?: string;
  ingredients?: Ingredient[];
  slug?: string;
  lastModifiedDate?: string;
  isMarkdown?: boolean;
  sideDish?: string;
  __v?: number;
};

export type Ingredient = {
  _id: string;
  name: string;
  amount?: number;
  amountUnit?: string;
  isGroup?: boolean;
};

export type AddRecipe = {
  title: string;
  preparationTime?: number;
  servingCount?: number;
  directions?: string;
  ingredients?: Omit<Ingredient, '_id'>[];
  sideDish?: string;
};
