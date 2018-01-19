// @flow

import { NativeModules } from 'react-native';

export default (id: string, cb: (?Error) => void) => (
  NativeModules.AppleSFSpeechRecognizerRecognitionTaskAudioBuffer.cancel(id, cb)
);
