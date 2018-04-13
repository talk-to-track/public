// @flow

import TRANSLATION_SEGMENT_TYPE_DIET from '../../constants/TRANSLATION_SEGMENT_TYPE_DIET';
import type { TranslationSegmentDiet } from '../../../types/flow/TranslationSegmentDiet';
import foodChickenNuggets from '../foods/chicken-nuggets';

const segment: TranslationSegmentDiet = {
  __typename: 'TranslationSegmentDiet',
  type: TRANSLATION_SEGMENT_TYPE_DIET,
  ingredient: {
    __typename: 'Ingredient',
    foodId: foodChickenNuggets.id,
    ingredients: null,
    quantity: 84,
    unitId: '5',
  },
};

export default segment;
