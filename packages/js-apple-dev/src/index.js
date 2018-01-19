// @flow

export type {
  AVAudioSessionDataSourceDescription,
} from './AVFoundation/AVAudioSessionDataSourceDescription';

export type {
  AVAudioSessionLocation,
  AVAudioSessionLocationLower,
  AVAudioSessionLocationUpper,
} from './AVFoundation/AVAudioSessionLocation';

export {
  AV_AUDIO_SESSION_LOCATION_LOWER,
  AV_AUDIO_SESSION_LOCATION_UPPER,
} from './AVFoundation/AVAudioSessionLocation';

export type {
  AVAudioSessionOrientation,
  AVAudioSessionOrientationBack,
  AVAudioSessionOrientationBottom,
  AVAudioSessionOrientationFront,
  AVAudioSessionOrientationLeft,
  AVAudioSessionOrientationRight,
  AVAudioSessionOrientationTop,
} from './AVFoundation/AVAudioSessionOrientation';

export {
  AV_AUDIO_SESSION_ORIENTATION_BACK,
  AV_AUDIO_SESSION_ORIENTATION_BOTTOM,
  AV_AUDIO_SESSION_ORIENTATION_FRONT,
  AV_AUDIO_SESSION_ORIENTATION_LEFT,
  AV_AUDIO_SESSION_ORIENTATION_RIGHT,
  AV_AUDIO_SESSION_ORIENTATION_TOP,
} from './AVFoundation/AVAudioSessionOrientation';

export type {
  AVAudioSessionRecordPermission,
  AVAudioSessionRecordPermissionDenied,
  AVAudioSessionRecordPermissionGranted,
  AVAudioSessionRecordPermissionUndetermined,
} from './AVFoundation/AVAudioSessionRecordPermission';

export {
  AV_AUDIO_SESSION_RECORD_PERMISSION_DENIED,
  AV_AUDIO_SESSION_RECORD_PERMISSION_GRANTED,
  AV_AUDIO_SESSION_RECORD_PERMISSION_UNDETERMINED,
} from './AVFoundation/AVAudioSessionRecordPermission';

export type {
  NSRange,
} from './Foundation/NSRange';

export type {
  SFSpeechAudioBufferRecognitionRequest,
} from './Speech/SFSpeechAudioBufferRecognitionRequest';

export type {
  SFSpeechRecognitionRequest,
} from './Speech/SFSpeechRecognitionRequest';

export type {
  SFSpeechRecognitionResult,
} from './Speech/SFSpeechRecognitionResult';

export type {
  SFSpeechRecognitionTaskHint,
  SFSpeechRecognitionTaskHintConfirmation,
  SFSpeechRecognitionTaskHintDictation,
  SFSpeechRecognitionTaskHintSearch,
  SFSpeechRecognitionTaskHintUnspecified,
} from './Speech/SFSpeechRecognitionTaskHint';

export {
  SF_SPEECH_RECOGNITION_TASK_HINT_CONFIRMATION,
  SF_SPEECH_RECOGNITION_TASK_HINT_DICTATION,
  SF_SPEECH_RECOGNITION_TASK_HINT_SEARCH,
  SF_SPEECH_RECOGNITION_TASK_HINT_UNSPECIFIED,
} from './Speech/SFSpeechRecognitionTaskHint';

export type {
  SFSpeechRecognizerAuthorizationStatus,
  SFSpeechRecognizerAuthorizationStatusAuthorized,
  SFSpeechRecognizerAuthorizationStatusDenied,
  SFSpeechRecognizerAuthorizationStatusNotDetermined,
  SFSpeechRecognizerAuthorizationStatusRestricted,
} from './Speech/SFSpeechRecognizerAuthorizationStatus';

export {
  SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_AUTHORIZED,
  SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_DENIED,
  SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_NOT_DETERMINED,
  SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_RESTRICTED,
} from './Speech/SFSpeechRecognizerAuthorizationStatus';

export type {
  SFTranscription,
} from './Speech/SFTranscription';

export type {
  SFTranscriptionSegment,
} from './Speech/SFTranscriptionSegment';
