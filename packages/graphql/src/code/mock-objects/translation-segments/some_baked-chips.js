// @flow

import TRANSLATION_SEGMENT_TYPE_DIET from '../../constants/TRANSLATION_SEGMENT_TYPE_DIET';
import type { TranslationSegmentDiet } from '../../../types/flow/TranslationSegmentDiet';
import foodBakedPotatoChips from '../foods/baked-potato-chips';

const segment: TranslationSegmentDiet = {
  __typename: 'TranslationSegmentDiet',
  type: TRANSLATION_SEGMENT_TYPE_DIET,
  ingredient: {
    __typename: 'Ingredient',
    foodId: foodBakedPotatoChips.id,
    ingredients: null,
    quantity: 1,
    unitId: '6',
  },
};

export default segment;
