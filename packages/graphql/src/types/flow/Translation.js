// @flow

import type { TranslationSegment } from './TranslationSegment';

export type Translation = {|
  __typename: 'Translation',
  segments: TranslationSegment[],
|};
