// @flow

import { map as mostMap } from 'most';

import actionStopSpeechRecognition from '../../actions/stop-speech-recognition';
import getActionStopRecording from '../../observables/action-stop-recording';

export default (action$: any) => mostMap(
  actionStopSpeechRecognition,
  getActionStopRecording(action$),
);
