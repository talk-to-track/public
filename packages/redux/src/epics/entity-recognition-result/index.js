// @flow

import {
  empty as mostEmpty,
  filter as mostFilter,
  fromPromise as mostFromPromise,
  join as mostJoin,
  map as mostMap,
  multicast as mostMulticast,
  sample as mostSample,
  scan as mostScan,
  switchLatest as mostSwitchLatest,
  zip as mostZip,
} from 'most';

import actionEntityRecognitionResult from '../../actions/entity-recognition-result';
import FINALIZE_SPEECH_RECOGNITION from '../../constants/finalize-speech-recognition';
import getActionSetSpeechRecognitionText from '../../observables/action-set-speech-recognition-text';
import getIsTracking from '../../observables/is-tracking';
import serviceRecognize from '../../services/recognize';
import type { EpicOptionsMatch as Options } from '../../types/EpicOptionsMatch';

export default (opts: Options, action$: any) => {
  const isTracking$ = getIsTracking(action$);

  const finalizeSpeechRecognition$ = mostFilter(
    action => action.type === FINALIZE_SPEECH_RECOGNITION,
    action$,
  );

  const speechRecognitionText$ = mostMap(
    action => action.payload,
    getActionSetSpeechRecognitionText(action$),
  );

  const finalSpeechRecognitionIndex$ = mostMulticast(mostFilter(
    index => index >= 0,
    mostSwitchLatest(mostMap(
      isTracking => (!isTracking ?
        mostEmpty() :
        mostScan(index => index + 1, -1, finalizeSpeechRecognition$)
      ),
      isTracking$,
    )),
  ));

  const finalSpeechRecognitionText$ = mostSample(
    text => text,
    finalSpeechRecognitionIndex$,
    speechRecognitionText$,
  );

  const entityRecognitionRequest$ = mostZip(
    (index, text) => ({ index, text }),
    finalSpeechRecognitionIndex$,
    finalSpeechRecognitionText$,
  );

  const entityRecognitionResult$ = mostJoin(mostMap(
    req => mostFromPromise(new Promise(resolve => (
      serviceRecognize({}, req.text, (err, res) => {
        if (res) {
          resolve({
            index: req.index,
            response: res,
          });
        }
      })
    ))),
    entityRecognitionRequest$,
  ));

  return mostMap(
    actionEntityRecognitionResult,
    entityRecognitionResult$,
  );
};
