// @flow

import type { SFSpeechRecognitionResult, SFSpeechAudioBufferRecognitionRequest } from '@talk-to-track/js-apple-dev';

type CallbackResult = (SFSpeechRecognitionResult) => void;
type CallbackError = (Error) => void;

export default (
  id: string,
  req: SFSpeechAudioBufferRecognitionRequest,
  cbResult: CallbackResult,
  cbError: CallbackError,
) => (
  cbError(new Error('Not implemented'))
);
