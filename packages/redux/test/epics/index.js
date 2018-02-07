// @flow

import test from 'ava';
import createEpic from '../../src/epics/root';
import { foods } from '../fixtures/foods';
import { matches } from '../fixtures/matches';
import appleAVAudioSessionRequestRecordPermission from '../_mocks/apple_av-audio-session_request-record-permission';
import appleAVAudioSessionInputDataSourcesGet from '../_mocks/apple_av-audio-session_input-data-sources_get';
import appleSFSpeechRecognizerRequestAuthorization from '../_mocks/apple_sf-speech-recognizer_request-authorization';

import {
  cancel as appleSFSpeechRecognizerRecognitionTaskAudioBufferCancel,
  start as appleSFSpeechRecognizerRecognitionTaskAudioBufferStart,
} from '../_mocks/apple_sf-speech-recognizer_recognition-task_audio-buffer';

const opts = {
  appleAVAudioSessionInputDataSourcesGet,
  appleAVAudioSessionRequestRecordPermission,
  appleSFSpeechRecognizerRecognitionTaskAudioBufferCancel,
  appleSFSpeechRecognizerRecognitionTaskAudioBufferStart,
  appleSFSpeechRecognizerRequestAuthorization,
  idleDuration: 10000,
  nextKeyword: 'next',
  nextPauseDuration: 2500,
  serviceData: { foods, matches },
};

test('default', (t) => {
  const epic = createEpic(opts);
  t.is(typeof epic, 'object');
});
