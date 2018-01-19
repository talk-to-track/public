// @flow

import type { AVAudioSessionRecordPermission } from '@talk-to-track/js-apple-dev';
import { NativeModules } from 'react-native';

export default (cb: (err: ?Error, permission: ?AVAudioSessionRecordPermission) => void) => (
  NativeModules.AppleAVAudioSessionRequestRecordPermission.run(cb)
);
