// @flow

import type { Food } from '../../../types/flow/Food';
import classicGardenSalad from './classic-garden-salad';
import greenBellPepper from './green-bell-pepper';
import reducedFatMayonnaise from './reduced-fat-mayonnaise';
import romaTomatoSlices from './roma-tomato-slices';
import subwaySpicyItalian from './subway-spicy-italian';
import whiteOnion from './white-onion';

const food: Food = {
  __typename: 'Food',
  calories: null,
  id: '528698',
  name: 'Italian Sub',
  ingredients: [
    {
      __typename: 'Ingredient',
      foodId: subwaySpicyItalian.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
    {
      __typename: 'Ingredient',
      foodId: classicGardenSalad.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
    {
      __typename: 'Ingredient',
      foodId: romaTomatoSlices.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
    {
      __typename: 'Ingredient',
      foodId: whiteOnion.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
    {
      __typename: 'Ingredient',
      foodId: greenBellPepper.id,
      ingredients: null,
      quantity: 1,
      unitId: '0',
    },
    {
      __typename: 'Ingredient',
      foodId: reducedFatMayonnaise.id,
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
