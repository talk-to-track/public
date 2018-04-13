// @flow

import type { TranslationSegmentTypeDiet } from './TranslationSegmentTypeDiet';
import type { TranslationSegmentTypeExercise } from './TranslationSegmentTypeExercise';

export type TranslationSegmentType = (
  | TranslationSegmentTypeDiet
  | TranslationSegmentTypeExercise
);
