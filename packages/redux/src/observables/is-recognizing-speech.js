// @flow

import { constant as mostConstant, merge as mostMerge, skipRepeats as mostSkipRepeats } from 'most';
import getActionStartSpeechRecognition from './action-start-speech-recognition';
import getActionStopSpeechRecognition from './action-stop-speech-recognition';

export default (action$: any) => {
  const actionStartSpeechRecognition$ = getActionStartSpeechRecognition(action$);
  const actionStopSpeechRecognition$ = getActionStopSpeechRecognition(action$);

  return mostSkipRepeats(mostMerge(
    mostConstant(true, actionStartSpeechRecognition$),
    mostConstant(false, actionStopSpeechRecognition$),
  ));
};
