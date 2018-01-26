// @flow

import { filter as mostFilter } from 'most';
import STOP_SPEECH_RECOGNITION from '../constants/stop-speech-recognition';

export default (action$: any) => (
  mostFilter(
    action => action.type === STOP_SPEECH_RECOGNITION,
    action$,
  )
);
