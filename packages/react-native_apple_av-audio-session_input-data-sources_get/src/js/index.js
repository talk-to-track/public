// @flow

import type { AVAudioSessionDataSourceDescription } from '@talk-to-track/js-apple-dev';
import { NativeModules } from 'react-native';

type Callback = (err: ?Error, sources: ?AVAudioSessionDataSourceDescription[]) => void;

export default (cb: Callback) => (
  NativeModules.AppleAVAudioSessionInputDataSourcesGet.run(cb)
);
