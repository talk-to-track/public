// @flow

import { mergeArray as mostMergeArray } from 'most';
import type { EpicOptionsRoot as Options } from '../../types/EpicOptionsRoot';
import epicCancelSpeechRecognition from '../cancel-speech-recognition';
import epicEntityRecognitionResult from '../entity-recognition-result';
import epicFinalizeSpeechRecognition from '../finalize-speech-recognition';
import epicIncrementDietMatchQuantityBy from '../increment-diet-match-quantity-by';
import epicLoadFoods from '../load-foods';
import epicRequestStartRecording from '../request-start-recording';
import epicRequestStartSpeechRecognition from '../request-start-speech-recognition';
import epicRequestStopRecording from '../request-stop-recording';
import epicRestartSpeechRecognition from '../restart-speech-recognition';
import epicSetAudioInputId from '../set-audio-input-id';
import epicSetDietMatchNutritionData from '../set-diet-match-nutrition-data';
import epicSetDietTotalMatchNutritionData from '../set-diet-total-match-nutrition-data';
import epicSetIsEditing from '../set-is-editing';
import epicSetFoods from '../set-foods';
import epicSetMatch from '../set-match';
import epicSetMatches from '../set-matches';
import epicSetPermission from '../set-permission';
import epicSetRecordingIdle from '../set-recording-idle';
import epicSetSpeechRecognitionText from '../set-speech-recognition-text';
import epicStartEditing from '../start-editing';
import epicStartRecording from '../start-recording';
import epicStartSpeechRecognition from '../start-speech-recognition';
import epicStopSpeechRecognition from '../stop-speech-recognition';
import epicStartTracking from '../start-tracking';
import epicStopRecording from '../stop-recording';
import epicStopTracking from '../stop-tracking';

export default (opts: Options) => (action$: any) => (
  mostMergeArray([
    epicCancelSpeechRecognition(opts, action$),
    epicEntityRecognitionResult(opts, action$),
    epicFinalizeSpeechRecognition(opts, action$),
    epicIncrementDietMatchQuantityBy(action$),
    epicLoadFoods(action$),
    epicRequestStartRecording(action$),
    epicRequestStartSpeechRecognition(action$),
    epicRequestStopRecording(action$),
    epicRestartSpeechRecognition(action$),
    epicSetAudioInputId(opts, action$),
    epicSetDietMatchNutritionData(action$),
    epicSetDietTotalMatchNutritionData(action$),
    epicSetIsEditing(action$),
    epicSetFoods(action$),
    epicSetMatch(action$),
    epicSetMatches(action$),
    epicSetPermission(opts, action$),
    epicSetRecordingIdle(opts, action$),
    epicSetSpeechRecognitionText(opts, action$),
    epicStartEditing(action$),
    epicStartRecording(action$),
    epicStartSpeechRecognition(opts, action$),
    epicStartTracking(action$),
    epicStopRecording(action$),
    epicStopSpeechRecognition(action$),
    epicStopTracking(action$),
  ])
);
