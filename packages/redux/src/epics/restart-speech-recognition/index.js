// @flow

import {
  concat as mostConcat,
  filter as mostFilter,
  just as mostJust,
  map as mostMap,
  switchLatest as mostSwitchLatest,
} from 'most';

import actionRequestStartSpeechRecognition from '../../actions/request-start-speech-recognition';
import actionStopSpeechRecognition from '../../actions/stop-speech-recognition';
import FINALIZE_SPEECH_RECOGNITION from '../../constants/finalize-speech-recognition';

const stopAndStart = () => mostConcat(
  mostJust(actionStopSpeechRecognition()),
  mostJust(actionRequestStartSpeechRecognition()),
);

export default (action$: any) => {
  const finalizeSpeechRecognition$ = mostFilter(
    action => action.type === FINALIZE_SPEECH_RECOGNITION,
    action$,
  );

  return mostSwitchLatest(mostMap(
    stopAndStart,
    finalizeSpeechRecognition$,
  ));
};
