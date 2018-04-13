// @flow

import type { Ingredient } from './Ingredient';
import type { TranslationSegmentTypeDiet } from './TranslationSegmentTypeDiet';

export type TranslationSegmentDiet = {|
  __typename: 'TranslationSegmentDiet',
  type: TranslationSegmentTypeDiet,
  ingredient: Ingredient,
|};
