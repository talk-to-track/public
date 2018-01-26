// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import SET_SPEECH_RECOGNITION_RESULT from '../../constants/set-speech-recognition-result';

export default (keywordString: string, action$: any) => {
  const keywordRegExp = new RegExp(keywordString, 'i');

  const speechRecognitionResult$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === SET_SPEECH_RECOGNITION_RESULT,
      action$,
    ),
  );

  const speechRecognitionText$ = mostMap(
    result => {
      const transcription = result.bestTranscription || {};
      return transcription.formattedString || '';
    },
    speechRecognitionResult$,
  );

  return mostFilter(
    text => text.search(keywordRegExp) >= 0,
    speechRecognitionText$,
  );
};
