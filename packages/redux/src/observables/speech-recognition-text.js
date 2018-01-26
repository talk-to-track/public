// @flow

import { map as mostMap } from 'most';
import getActionSetSpeechRecognitionText from './action-set-speech-recognition-text';

export default (action$: any) => (
  mostMap(
    action => action.payload,
    getActionSetSpeechRecognitionText(action$),
  )
);
