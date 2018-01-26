// @flow

import type { AVAudioSessionDataSourceDescription } from '@talk-to-track/js-apple-dev';
import { NativeModules } from 'react-native';

export default (cb: (err: ?Error, sources: ?AVAudioSessionDataSourceDescription[]) => void) => (
  NativeModules.AppleAVAudioSessionInputDataSourcesGet.run(cb)
);
