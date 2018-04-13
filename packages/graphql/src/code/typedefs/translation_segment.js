// @flow

import TranslationSegmentDiet from './translation_segment_diet';

const TranslationSegment = `
  union TranslationSegment = TranslationSegmentDiet
`;

export default [
  TranslationSegment,
  ...TranslationSegmentDiet,
];
