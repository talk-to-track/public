// @flow

import type { SFSpeechRecognizerAuthorizationStatus } from '@talk-to-track/js-apple-dev';

type Callback = (err: ?Error, status: ?SFSpeechRecognizerAuthorizationStatus) => void;

export default (cb: Callback) => (
  cb(new Error('Not implemented'))
);
