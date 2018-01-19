// @flow

import { NativeModules } from 'react-native';

export default (cb: (err: ?Error, hasPermission: ?boolean) => void) => (
  NativeModules.AppleAVAudioSessionRecordPermission.run(cb)
);
