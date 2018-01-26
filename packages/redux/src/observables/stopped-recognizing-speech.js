// @flow

import { filter as mostFilter } from 'most';
import getIsRecognizingSpeech from './is-recognizing-speech';

export default (action$: any) => (
  mostFilter(
    isRecognizingSpeech => !isRecognizingSpeech,
    getIsRecognizingSpeech(action$),
  )
);
