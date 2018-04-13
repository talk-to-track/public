// @flow

import type { Food } from '../../../types/flow/Food';

const food: Food = {
  __typename: 'Food',
  calories: 124.95,
  id: '11194',
  ingredients: null,
  name: 'Red Wine',
  nutrients: {
    __typename: 'Nutrients',
    calcium: 11.76,
    carbs: 3.8367,
    cholesterol: null,
    fat: null,
    fiber: null,
    iron: 0.6762,
    protein: 0.1029,
    satFat: null,
    sodium: 5.88,
    sugars: 0.9114,
    transFat: null,
    vitA: 2.94,
    vitC: null,
  },
};

export default food;
