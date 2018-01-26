// @flow

import { mergeArray as mostMergeArray } from 'most';
import type { EpicOptionsRoot as Options } from '../../types/EpicOptionsRoot';
import epicCancelSpeechRecognition from '../cancel-speech-recognition';
import epicFinalizeSpeechRecognition from '../finalize-speech-recognition';
import epicMatchFood from '../match-food';
import epicRequestStartRecording from '../request-start-recording';
import epicRequestStartSpeechRecognition from '../request-start-speech-recognition';
import epicRequestStopRecording from '../request-stop-recording';
import epicRestartSpeechRecognition from '../restart-speech-recognition';
import epicSetAudioInputId from '../set-audio-input-id';
import epicSetPermission from '../set-permission';
import epicSetRecordingIdle from '../set-recording-idle';
import epicSetSpeechRecognitionText from '../set-speech-recognition-text';
import epicStartRecording from '../start-recording';
import epicStartSpeechRecognition from '../start-speech-recognition';
import epicStopSpeechRecognition from '../stop-speech-recognition';
import epicStartTracking from '../start-tracking';
import epicStopRecording from '../stop-recording';
import epicStopTracking from '../stop-tracking';

export default (opts: Options) => (action$: any) => (
  mostMergeArray([
    epicCancelSpeechRecognition(opts, action$),
    epicFinalizeSpeechRecognition(opts, action$),
    epicMatchFood(opts, action$),
    epicRequestStartRecording(action$),
    epicRequestStartSpeechRecognition(action$),
    epicRequestStopRecording(action$),
    epicRestartSpeechRecognition(action$),
    epicSetAudioInputId(opts, action$),
    epicSetPermission(opts, action$),
    epicSetRecordingIdle(opts, action$),
    epicSetSpeechRecognitionText(opts, action$),
    epicStartRecording(action$),
    epicStartSpeechRecognition(opts, action$),
    epicStartTracking(action$),
    epicStopRecording(action$),
    epicStopSpeechRecognition(action$),
    epicStopTracking(action$),
  ])
);
