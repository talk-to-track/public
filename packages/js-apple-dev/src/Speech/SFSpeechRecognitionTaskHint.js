// @flow

export const SF_SPEECH_RECOGNITION_TASK_HINT_CONFIRMATION = 3;
export const SF_SPEECH_RECOGNITION_TASK_HINT_DICTATION = 1;
export const SF_SPEECH_RECOGNITION_TASK_HINT_SEARCH = 2;
export const SF_SPEECH_RECOGNITION_TASK_HINT_UNSPECIFIED = 0;

export type SFSpeechRecognitionTaskHintConfirmation = 3;
export type SFSpeechRecognitionTaskHintDictation = 1;
export type SFSpeechRecognitionTaskHintSearch = 2;
export type SFSpeechRecognitionTaskHintUnspecified = 0;

export type SFSpeechRecognitionTaskHint = (
  | SFSpeechRecognitionTaskHintConfirmation
  | SFSpeechRecognitionTaskHintDictation
  | SFSpeechRecognitionTaskHintSearch
  | SFSpeechRecognitionTaskHintUnspecified
);
