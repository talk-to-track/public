// @flow

import type { SFSpeechRecognitionResult, SFSpeechAudioBufferRecognitionRequest } from '@talk-to-track/js-apple-dev';

type ResultCallback = (result: SFSpeechRecognitionResult) => void;
type ErrorCallback = (err: Error) => void;

export type AppleSFSpeechRecognizerRecognitionTaskAudioBufferStart = (
  id: string,
  req: SFSpeechAudioBufferRecognitionRequest,
  cbResult: ResultCallback,
  cbError: ErrorCallback,
) => void;
