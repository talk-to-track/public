// @flow

import type { SFSpeechRecognitionResult, SFSpeechAudioBufferRecognitionRequest } from '@talk-to-track/js-apple-dev';
import { NativeEventEmitter, NativeModules } from 'react-native';

type CallbackResult = (SFSpeechRecognitionResult) => void;
type CallbackError = (Error) => void;

const module = NativeModules.AppleSFSpeechRecognizerRecognitionTaskAudioBuffer;

export default (
  id: string,
  req: SFSpeechAudioBufferRecognitionRequest,
  cbResult: CallbackResult,
  cbError: CallbackError,
) => {
  const emitter = new NativeEventEmitter(module);
  let errorListener;
  let resultListener;

  const errorHandler = (res) => {
    if (res.id === id) {
      errorListener.remove();
      resultListener.remove();
      cbError(res.value);
    }
  };

  const resultHandler = (res) => {
    if (res.id === id) {
      if (res.value.isFinal) {
        errorListener.remove();
        resultListener.remove();
      }

      cbResult(res.value);
    }
  };

  errorListener = emitter.addListener('taskError', errorHandler);
  resultListener = emitter.addListener('taskResult', resultHandler);

  module.start(id, req);
};
