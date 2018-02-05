// @flow

import type { SFSpeechRecognizerAuthorizationStatus } from '@talk-to-track/js-apple-dev';
import { NativeModules } from 'react-native';

type Callback = (err: ?Error, status: ?SFSpeechRecognizerAuthorizationStatus) => void;

export default (cb: Callback) => (
  NativeModules.AppleSFSpeechRecognizerRequestAuthorization.run(cb)
);
