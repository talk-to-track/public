// @flow

import type { SFSpeechRecognizerAuthorizationStatus } from '@talk-to-track/js-apple-dev';

type Callback = (err: ?Error, status: ?SFSpeechRecognizerAuthorizationStatus) => void;

export type AppleSFSpeechRecognizerRequestAuthorization = (cb: Callback) => void;
