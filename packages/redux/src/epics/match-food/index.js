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

import actionMatchFood from '../../actions/match-food';
import FINALIZE_SPEECH_RECOGNITION from '../../constants/finalize-speech-recognition';
import getActionSetSpeechRecognitionText from '../../observables/action-set-speech-recognition-text';
import getIsTracking from '../../observables/is-tracking';
import type { EpicOptionsMatchFood as Options } from '../../types/EpicOptionsMatchFood';
import serviceMatchFood from '../../services/match-food';

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

  const foodMatchReq$ = mostZip(
    (index, text) => ({ index, text }),
    finalSpeechRecognitionIndex$,
    finalSpeechRecognitionText$,
  );

  const foodMatchRes$ = mostJoin(mostMap(
    foodMatchRequest => mostFromPromise(new Promise(resolve => (
      serviceMatchFood(
        opts.serviceData,
        foodMatchRequest.text,
        (err, result) => {
          if (result) {
            resolve({
              index: foodMatchRequest.index,
              result,
            });
          }
        },
      )
    ))),
    foodMatchReq$,
  ));

  return mostMap(
    actionMatchFood,
    foodMatchRes$,
  );
};
