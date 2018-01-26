// @flow

import { filter as mostFilter, map as mostMap, skipRepeats as mostSkipRepeats } from 'most';
import type { EpicOptionsRestartSpeechRecognition as Options } from '../../types/EpicOptionsRestartSpeechRecognition';
import actionSetSpeechRecognitionText from '../../actions/set-speech-recognition-text';
import SET_SPEECH_RECOGNITION_RESULT from '../../constants/set-speech-recognition-result';

export default (opts: Options, action$: any) => {
  const keywordRegExp = new RegExp(opts.nextKeyword, 'ig');

  const speechRecognitionResult$ = mostMap(
    action => action.payload,
    mostFilter(
      action => (
        action.type === SET_SPEECH_RECOGNITION_RESULT &&
        action.payload.bestTranscription
      ),
      action$,
    ),
  );

  const speechRecognitionText$ = mostMap(
    result => result.bestTranscription.formattedString,
    speechRecognitionResult$,
  );

  const formattedSpeechRecognitionText$ = mostSkipRepeats(mostMap(
    text => text.replace(keywordRegExp, '').trim(),
    speechRecognitionText$,
  ));

  return mostMap(
    actionSetSpeechRecognitionText,
    formattedSpeechRecognitionText$,
  );
};
