// @flow

import type { Food } from '../../../types/flow/Food';
import caesarSaladDressing from './caesar-salad-dressing';
import parmesanCheese from './parmesan-cheese';
import romaineLettuce from './romaine-lettuce';
import seasonedCrouton from './seasoned-crouton';

const food: Food = {
  __typename: 'Food',
  calories: null,
  id: '30045',
  name: 'Caesar Salad',
  ingredients: [
    {
      __typename: 'Ingredient',
      foodId: romaineLettuce.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
    {
      __typename: 'Ingredient',
      foodId: caesarSaladDressing.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
    {
      __typename: 'Ingredient',
      foodId: seasonedCrouton.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
    {
      __typename: 'Ingredient',
      foodId: parmesanCheese.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
  ],
  nutrients: {
    __typename: 'Nutrients',
    calcium: null,
    carbs: null,
    cholesterol: null,
    fat: null,
    fiber: null,
    iron: null,
    protein: null,
    satFat: null,
    sodium: null,
    sugars: null,
    transFat: null,
    vitA: null,
    vitC: null,
  },
};

export default food;
