// @flow

import { filter as mostFilter } from 'most';
import START_SPEECH_RECOGNITION from '../constants/start-speech-recognition';

export default (action$: any) => (
  mostFilter(
    action => action.type === START_SPEECH_RECOGNITION,
    action$,
  )
);
