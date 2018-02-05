// @flow

import { NativeModules } from 'react-native';

type Callback = (err: ?Error, hasPermission: ?boolean) => void;

export default (cb: Callback) => (
  NativeModules.AppleAVAudioSessionRecordPermission.run(cb)
);
