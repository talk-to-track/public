// @flow

import Ingredient from './ingredient';
import TranslationSegmentType from './translation_segment_type';

const TranslationSegmentDiet = `
  type TranslationSegmentDiet {
    type: TranslationSegmentType
    ingredient: Ingredient
  }
`;

export default [
  ...Ingredient,
  TranslationSegmentDiet,
  ...TranslationSegmentType,
];
