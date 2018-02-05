// @flow

import type { AVAudioSessionRecordPermission } from '@talk-to-track/js-apple-dev';
import { NativeModules } from 'react-native';

type Callback = (err: ?Error, permission: ?boolean) => void;

export default (cb: Callback) => (
  NativeModules.AppleAVAudioSessionRequestRecordPermission.run(cb)
);
