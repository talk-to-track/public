// @flow

import type { Food } from '../../../types/flow/Food';

const food: Food = {
  __typename: 'Food',
  calories: 100,
  id: '847929',
  ingredients: null,
  name: 'Girard\'s Caesar Salad Dressing',
  nutrients: {
    __typename: 'Nutrients',
    calcium: 80,
    carbs: 3,
    cholesterol: 80,
    fat: 20,
    fiber: null,
    iron: null,
    protein: 1,
    satFat: 6,
    sodium: 550,
    sugars: 1,
    transFat: null,
    vitA: 3000,
    vitC: null,
  },
};

export default food;
