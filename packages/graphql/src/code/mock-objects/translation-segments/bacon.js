// @flow

import TRANSLATION_SEGMENT_TYPE_DIET from '../../constants/TRANSLATION_SEGMENT_TYPE_DIET';
import type { TranslationSegmentDiet } from '../../../types/flow/TranslationSegmentDiet';
import foodBaconStrips from '../foods/bacon-strips';

const segment: TranslationSegmentDiet = {
  __typename: 'TranslationSegmentDiet',
  type: TRANSLATION_SEGMENT_TYPE_DIET,
  ingredient: {
    __typename: 'Ingredient',
    foodId: foodBaconStrips.id,
    ingredients: null,
    quantity: 2,
    unitId: '5',
  },
};

export default segment;
