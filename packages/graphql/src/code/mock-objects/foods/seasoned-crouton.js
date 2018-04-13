// @flow

import type { Food } from '../../../types/flow/Food';

const food: Food = {
  __typename: 'Food',
  calories: 100,
  id: '13682',
  ingredients: null,
  name: 'Seasoned Crouton',
  nutrients: {
    __typename: 'Nutrients',
    calcium: null,
    carbs: 6,
    cholesterol: null,
    fat: null,
    fiber: 3,
    iron: 0.5,
    protein: 1,
    satFat: null,
    sodium: 150,
    sugars: 4,
    transFat: null,
    vitA: 100,
    vitC: null,
  },
};

export default food;
