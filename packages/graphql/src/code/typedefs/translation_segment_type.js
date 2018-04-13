// @flow

import diet from '../constants/TRANSLATION_SEGMENT_TYPE_DIET';
import exercise from '../constants/TRANSLATION_SEGMENT_TYPE_EXERCISE';

export default [`
  enum TranslationSegmentType {
    ${diet}
    ${exercise}
  }
`];
