// @flow

export const SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_AUTHORIZED = 3;
export const SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_DENIED = 1;
export const SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_NOT_DETERMINED = 0;
export const SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_RESTRICTED = 2;

export type SFSpeechRecognizerAuthorizationStatusAuthorized = 3;
export type SFSpeechRecognizerAuthorizationStatusDenied = 1;
export type SFSpeechRecognizerAuthorizationStatusNotDetermined = 0;
export type SFSpeechRecognizerAuthorizationStatusRestricted = 2;

export type SFSpeechRecognizerAuthorizationStatus = (
  | SFSpeechRecognizerAuthorizationStatusAuthorized
  | SFSpeechRecognizerAuthorizationStatusDenied
  | SFSpeechRecognizerAuthorizationStatusNotDetermined
  | SFSpeechRecognizerAuthorizationStatusRestricted
);
