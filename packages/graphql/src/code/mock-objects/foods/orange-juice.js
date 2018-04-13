// @flow

import type { Food } from '../../../types/flow/Food';

const food: Food = {
  __typename: 'Food',
  calories: 110,
  id: '2293',
  ingredients: null,
  name: 'Orange Juice',
  nutrients: {
    __typename: 'Nutrients',
    calcium: 20,
    carbs: 26,
    cholesterol: null,
    fat: null,
    fiber: null,
    iron: null,
    protein: 2,
    satFat: null,
    sodium: null,
    sugars: 22,
    transFat: null,
    vitA: null,
    vitC: 72,
  },
};

export default food;
