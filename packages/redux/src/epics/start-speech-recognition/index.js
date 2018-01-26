// @flow

import { create as mostCreate } from '@most/create';
import { SF_SPEECH_RECOGNITION_TASK_HINT_DICTATION } from '@talk-to-track/js-apple-dev';
import _uniqueId from 'lodash/fp/uniqueId';

import {
  combine as mostCombine,
  constant as mostConstant,
  empty as mostEmpty,
  filter as mostFilter,
  just as mostJust,
  map as mostMap,
  merge as mostMerge,
  switchLatest as mostSwitchLatest,
} from 'most';

import actionSetSpeechRecognitionResult from '../../actions/set-speech-recognition-result';
import actionStartSpeechRecognition from '../../actions/start-speech-recognition';
import actionStopRecording from '../../actions/stop-recording';
import REQUEST_START_SPEECH_RECOGNITION from '../../constants/request-start-speech-recognition';
import SET_AUDIO_INPUT_ID from '../../constants/set-audio-input-id';
import STOP_SPEECH_RECOGNITION from '../../constants/stop-speech-recognition';
import type { EpicOptionsStartSpeechRecognition as Options } from '../../types/EpicOptionsStartSpeechRecognition';

export default (opts: Options, action$: any) => {
  const requestStartSpeechRecognition$ = mostFilter(
    action => action.type === REQUEST_START_SPEECH_RECOGNITION,
    action$,
  );

  const stopSpeechRecognition$ = mostFilter(
    action => action.type === STOP_SPEECH_RECOGNITION,
    action$,
  );

  const wantsToRecognizeSpeech$ = mostMerge(
    mostConstant(true, requestStartSpeechRecognition$),
    mostConstant(false, stopSpeechRecognition$),
  );

  const audioInputId$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === SET_AUDIO_INPUT_ID,
      action$,
    ),
  );

  const speechRecognitionRequest$ = mostSwitchLatest(mostCombine(
    (audioInputId, wantsToRecognizeSpeech) => (!wantsToRecognizeSpeech ?
      mostEmpty() :
      mostJust({
        audioSessionDataSourceID: audioInputId,
        interactionIdentifier: 'TTT',
        taskHint: SF_SPEECH_RECOGNITION_TASK_HINT_DICTATION,
        shouldReportPartialResults: true,
      })
    ),
    audioInputId$,
    wantsToRecognizeSpeech$,
  ));

  return mostSwitchLatest(mostMap(
    speechRecognitionRequest => mostCreate((add) => {
      const id = _uniqueId();
      const options = { speechRecognitionRequest };
      const onError = () => add(actionStopRecording());
      const onResult = result => add(actionSetSpeechRecognitionResult(result));
      add(actionStartSpeechRecognition(id));
      opts.appleSFSpeechRecognizerRecognitionTaskAudioBufferStart(id, options, onResult, onError);
    }),
    speechRecognitionRequest$,
  ));
};
