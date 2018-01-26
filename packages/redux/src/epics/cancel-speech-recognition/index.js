// @flow

import {
  combine as mostCombine,
  constant as mostConstant,
  empty as mostEmpty,
  filter as mostFilter,
  fromPromise as mostFromPromise,
  join as mostJoin,
  map as mostMap,
  merge as mostMerge,
} from 'most';

import actionCancelSpeechRecognition from '../../actions/cancel-speech-recognition';
import START_SPEECH_RECOGNITION from '../../constants/start-speech-recognition';
import STOP_SPEECH_RECOGNITION from '../../constants/stop-speech-recognition';
import type { EpicOptionsCancelSpeechRecognition as Options } from '../../types/EpicOptionsCancelSpeechRecognition';

export default (opts: Options, action$: any) => {
  const startSpeechRecognition$ = mostFilter(
    action => action.type === START_SPEECH_RECOGNITION,
    action$,
  );

  const stopSpeechRecognition$ = mostFilter(
    action => action.type === STOP_SPEECH_RECOGNITION,
    action$,
  );

  const wantsToRecognizeSpeech$ = mostMerge(
    mostConstant(true, startSpeechRecognition$),
    mostConstant(false, stopSpeechRecognition$),
  );

  const speechRecognitionId$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === START_SPEECH_RECOGNITION,
      action$,
    ),
  );

  const cancelSpeechRecognition$ = mostJoin(mostCombine(
    (wantsToRecognizeSpeech, speechRecognitionId) => (wantsToRecognizeSpeech ?
      mostEmpty() :
      mostFromPromise(new Promise(resolve => (
        opts.appleSFSpeechRecognizerRecognitionTaskAudioBufferCancel(
          speechRecognitionId,
          resolve,
        )
      )))
    ),
    wantsToRecognizeSpeech$,
    speechRecognitionId$,
  ));

  return mostMap(
    actionCancelSpeechRecognition,
    cancelSpeechRecognition$,
  );
};
