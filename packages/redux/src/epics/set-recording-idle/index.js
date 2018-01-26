// @flow

import {
  debounce as mostDebounce,
  empty as mostEmpty,
  map as mostMap,
  switchLatest as mostSwitchLatest,
} from 'most';

import actionSetRecordingIdle from '../../actions/set-recording-idle';
import getIsRecording from '../../observables/is-recording';
import getSpeechRecognitionText from '../../observables/speech-recognition-text';
import type { EpicOptionsSetRecordingIdle as Options } from '../../types/EpicOptionsSetRecordingIdle';

export default (opts: Options, action$: any) => {
  const idleSignal$ = mostSwitchLatest(mostMap(
    isRecording => (isRecording ?
      mostDebounce(opts.idleDuration, getSpeechRecognitionText(action$)) :
      mostEmpty()
    ),
    getIsRecording(action$),
  ));

  return mostMap(
    actionSetRecordingIdle,
    idleSignal$,
  );
};
