// @flow

import type { Food } from '../../../types/flow/Food';

const food: Food = {
  __typename: 'Food',
  calories: 200,
  id: '1010',
  ingredients: null,
  name: 'Kraft Parmesan Cheese',
  nutrients: {
    __typename: 'Nutrients',
    calcium: 120,
    carbs: null,
    cholesterol: 40,
    fat: 10,
    fiber: null,
    iron: 0.5,
    protein: 4,
    satFat: 2,
    sodium: 300,
    sugars: null,
    transFat: null,
    vitA: 100,
    vitC: null,
  },
};

export default food;
