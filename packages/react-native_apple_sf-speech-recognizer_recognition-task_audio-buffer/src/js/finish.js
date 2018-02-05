// @flow

import { NativeModules } from 'react-native';

type Callback = (?Error) => void;

export default (id: string, cb: Callback) => (
  NativeModules.AppleSFSpeechRecognizerRecognitionTaskAudioBuffer.finish(id, cb)
);
