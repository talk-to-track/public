// @flow

import type { SFSpeechRecognitionResult, SFSpeechAudioBufferRecognitionRequest } from '@talk-to-track/js-apple-dev';
import { NativeEventEmitter, NativeModules } from 'react-native';

const module = NativeModules.AppleSFSpeechRecognizerRecognitionTaskAudioBuffer;

export default (
  id: string,
  req: SFSpeechAudioBufferRecognitionRequest,
  cbResult: (SFSpeechRecognitionResult) => void,
  cbError: (?Error) => void,
) => {
  const emitter = new NativeEventEmitter(module);

  const errorListener = (res) => {
    if (res.id === id) {
      emitter.removeListener(errorListener);
      emitter.removeListener(resultListener);
      cbError(res.value);
    }
  };

  const resultListener = (res) => {
    if (res.id === id) {
      if (res.value.isFinal) {
        emitter.removeListener(errorListener);
        emitter.removeListener(resultListener);
      }

      cbResult(res.value);
    }
  };

  emitter.addListener('taskError', errorListener);
  emitter.addListener('taskResult', resultListener);

  module.start(id, req);
};
