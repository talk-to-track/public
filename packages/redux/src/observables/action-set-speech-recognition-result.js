// @flow

import { filter as mostFilter } from 'most';
import SET_SPEECH_RECOGNITION_RESULT from '../constants/set-speech-recognition-result';

export default (action$: any) => (
  mostFilter(
    action => action.type === SET_SPEECH_RECOGNITION_RESULT,
    action$,
  )
);
