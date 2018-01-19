// @flow

import { NativeModules } from 'react-native';

export default (id: string, cb: (?Error) => void) => (
  NativeModules.AppleSFSpeechRecognizerRecognitionTaskAudioBuffer.finish(id, cb)
);
