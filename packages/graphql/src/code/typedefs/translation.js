// @flow

import TranslationSegment from './translation_segment';

const Translation = `
  type Translation {
    segments: [TranslationSegment!]!
  }
`;

export default [
  Translation,
  ...TranslationSegment,
];
