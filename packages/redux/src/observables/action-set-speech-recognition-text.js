// @flow

import { filter as mostFilter } from 'most';
import SET_SPEECH_RECOGNITION_TEXT from '../constants/set-speech-recognition-text';

export default (action$: any) => (
  mostFilter(
    action => action.type === SET_SPEECH_RECOGNITION_TEXT,
    action$,
  )
);
