// @flow

import TRANSLATION_SEGMENT_TYPE_DIET from '../../constants/TRANSLATION_SEGMENT_TYPE_DIET';
import type { TranslationSegmentDiet } from '../../../types/flow/TranslationSegmentDiet';
import foodClassicGardenSalad from '../foods/classic-garden-salad';
import foodGreenBellPepper from '../foods/green-bell-pepper';
import foodItalianSub from '../foods/italian-sub';
import foodReducedFatMayonnaise from '../foods/reduced-fat-mayonnaise';
import foodRomaTomatoSlices from '../foods/roma-tomato-slices';
import foodSubwaySpicyItalian from '../foods/subway-spicy-italian';
import foodWhiteOnion from '../foods/white-onion';

const segment: TranslationSegmentDiet = {
  __typename: 'TranslationSegmentDiet',
  type: TRANSLATION_SEGMENT_TYPE_DIET,
  ingredient: {
    __typename: 'Ingredient',
    foodId: foodItalianSub.id,
    quantity: 1,
    unitId: '5',
    ingredients: [
      {
        __typename: 'Ingredient',
        foodId: foodClassicGardenSalad.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
      {
        __typename: 'Ingredient',
        foodId: foodGreenBellPepper.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
      {
        __typename: 'Ingredient',
        foodId: foodReducedFatMayonnaise.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
      {
        __typename: 'Ingredient',
        foodId: foodRomaTomatoSlices.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
      {
        __typename: 'Ingredient',
        foodId: foodSubwaySpicyItalian.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
      {
        __typename: 'Ingredient',
        foodId: foodWhiteOnion.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
    ],
  },
};

export default segment;
