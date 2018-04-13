// @flow

import type { Food } from '../../../types/flow/Food';

const food: Food = {
  __typename: 'Food',
  calories: 2,
  id: '847045',
  ingredients: null,
  name: 'Black Coffee',
  nutrients: {
    __typename: 'Nutrients',
    calcium: null,
    carbs: null,
    cholesterol: null,
    fat: null,
    fiber: null,
    iron: null,
    protein: 0.3,
    satFat: null,
    sodium: 5,
    sugars: null,
    transFat: null,
    vitA: null,
    vitC: null,
  },
};

export default food;
