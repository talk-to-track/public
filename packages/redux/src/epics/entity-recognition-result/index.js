// @flow

import {
  constant as mostConstant,
  empty as mostEmpty,
  filter as mostFilter,
  fromPromise as mostFromPromise,
  join as mostJoin,
  just as mostJust,
  map as mostMap,
  merge as mostMerge,
  multicast as mostMulticast,
  sample as mostSample,
  scan as mostScan,
  switchLatest as mostSwitchLatest,
  zip as mostZip,
} from 'most';

import actionEntityRecognitionResult from '../../actions/entity-recognition-result';
import CLEAR from '../../constants/clear';
import FINALIZE_SPEECH_RECOGNITION from '../../constants/finalize-speech-recognition';
import getActionSetSpeechRecognitionText from '../../observables/action-set-speech-recognition-text';
import getIsTracking from '../../observables/is-tracking';
import serviceRecognize from '../../services/recognize';
import type { EpicOptionsMatch as Options } from '../../types/EpicOptionsMatch';

export default (opts: Options, action$: any) => {
  const isTracking$ = getIsTracking(action$);

  const indexOpIncrement$ = mostConstant('inc', mostFilter(
    action => action.type === FINALIZE_SPEECH_RECOGNITION,
    action$,
  ));

  const indexOpResetClear$ = mostFilter(
    action => action.type === CLEAR,
    action$,
  );

  const indexOpResetStopTracking$ = mostSwitchLatest(mostMap(
    isTracking => (isTracking ? mostEmpty() : mostJust()),
    isTracking$,
  ));

  const indexOpReset$ = mostConstant('reset', mostMerge(
    indexOpResetClear$,
    indexOpResetStopTracking$,
  ));

  const speechRecognitionText$ = mostMap(
    action => action.payload,
    getActionSetSpeechRecognitionText(action$),
  );

  const finalSpeechRecognitionIndex$ = mostFilter(
    index => index >= 0,
    mostScan(
      (index, op) => (op === 'inc' ? index + 1 : -1),
      -1,
      mostMerge(indexOpReset$, indexOpIncrement$),
    ),
  );

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
