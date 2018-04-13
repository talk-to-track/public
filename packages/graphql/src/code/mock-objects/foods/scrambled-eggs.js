// @flow

import type { Food } from '../../../types/flow/Food';

const food: Food = {
  __typename: 'Food',
  calories: 91,
  id: '10294',
  ingredients: null,
  name: 'Scrambled Eggs',
  nutrients: {
    __typename: 'Nutrients',
    calcium: 40.25,
    carbs: 1,
    cholesterol: 169,
    fat: 7,
    fiber: null,
    iron: 0.8,
    protein: 6.1,
    satFat: 2.05,
    sodium: 88.5,
    sugars: 0.85,
    transFat: 0.38,
    vitA: 352.5,
    vitC: null,
  },
};

export default food;
