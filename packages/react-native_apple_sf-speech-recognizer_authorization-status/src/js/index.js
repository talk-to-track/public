// @flow

import type { SFSpeechRecognizerAuthorizationStatus } from '@talk-to-track/js-apple-dev';
import { NativeModules } from 'react-native';

export default (cb: (err: ?Error, status: ?SFSpeechRecognizerAuthorizationStatus) => void) => (
  NativeModules.AppleSFSpeechRecognizerAuthorizationStatus.run(cb)
);
