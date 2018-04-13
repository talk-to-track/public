// @flow

import type { Food } from '../../types/flow/Food';

type ApiFood = {
  foodID: number,
  foodName: string,
  ingredients?: any[],
  nutriValues?: {
    calories?: number,
    calcium?: number,
    carbs?: number,
    cholesterol?: number,
    fat?: number,
    fiber?: number,
    iron?: number,
    protein?: number,
    satFat?: number,
    sodium?: number,
    sugars?: number,
    transFat?: number,
    vitA?: number,
    vitC?: number,
  },
  recipe?: {
    ingredients: { foodID: number }[],
  },
};

export default (apiFood: ?ApiFood): ?Food => {
  if (!apiFood) return null;

  const nutriValues = apiFood.nutriValues || {};

  return {
    __typename: 'Food',
    calories: nutriValues.calories,
    id: `${apiFood.foodID}`,
    ingredients: !apiFood.recipe ? null : apiFood.recipe.ingredients.map(ingredient => ({
      __typename: 'Ingredient',
      foodId: `${ingredient.foodID}`,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    })),
    name: apiFood.foodName,
    nutrients: {
      __typename: 'Nutrients',
      calcium: nutriValues.calcium,
      carbs: nutriValues.carbs,
      cholesterol: nutriValues.cholesterol,
      fat: nutriValues.fat,
      fiber: nutriValues.fiber,
      iron: nutriValues.iron,
      protein: nutriValues.protein,
      satFat: nutriValues.satFat,
      sodium: nutriValues.sodium,
      sugars: nutriValues.sugars,
      transFat: nutriValues.transFat,
      vitA: nutriValues.vitA,
      vitC: nutriValues.vitC,
    },
  };
};
