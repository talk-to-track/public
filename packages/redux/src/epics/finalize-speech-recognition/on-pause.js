// @flow

import {
  debounce as mostDebounce,
  empty as mostEmpty,
  filter as mostFilter,
  map as mostMap,
  switchLatest as mostSwitchLatest,
} from 'most';

import SET_SPEECH_RECOGNITION_RESULT from '../../constants/set-speech-recognition-result';
import getIsRecognizingSpeech from '../../observables/is-recognizing-speech';

export default (pauseDuration: number, action$: any) => {
  const isRecognizingSpeech$ = getIsRecognizingSpeech(action$);

  return mostSwitchLatest(mostMap(
    isRecognizingSpeech => (!isRecognizingSpeech ?
      mostEmpty() :
      mostDebounce(
        pauseDuration,
        mostFilter(
          action => action.type === SET_SPEECH_RECOGNITION_RESULT,
          action$,
        ),
      )
    ),
    isRecognizingSpeech$,
  ));
};
