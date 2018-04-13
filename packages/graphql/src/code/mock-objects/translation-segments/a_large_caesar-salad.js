// @flow

import TRANSLATION_SEGMENT_TYPE_DIET from '../../constants/TRANSLATION_SEGMENT_TYPE_DIET';
import type { TranslationSegmentDiet } from '../../../types/flow/TranslationSegmentDiet';
import foodCaesarSalad from '../foods/caesar-salad';
import foodCaesarSaladDressing from '../foods/caesar-salad-dressing';
import foodRomaineLettuce from '../foods/romaine-lettuce';
import foodSeasonedCrouton from '../foods/seasoned-crouton';

const segment: TranslationSegmentDiet = {
  __typename: 'TranslationSegmentDiet',
  type: TRANSLATION_SEGMENT_TYPE_DIET,
  ingredient: {
    __typename: 'Ingredient',
    foodId: foodCaesarSalad.id,
    quantity: 2,
    unitId: '20',
    ingredients: [
      {
        __typename: 'Ingredient',
        foodId: foodCaesarSaladDressing.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
      {
        __typename: 'Ingredient',
        foodId: foodRomaineLettuce.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
      {
        __typename: 'Ingredient',
        foodId: foodSeasonedCrouton.id,
        ingredients: null,
        quantity: 1,
        unitId: '0',
      },
    ],
  },
};

export default segment;
