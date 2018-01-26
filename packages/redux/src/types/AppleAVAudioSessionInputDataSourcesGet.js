// @flow

import type { AVAudioSessionDataSourceDescription } from '@talk-to-track/js-apple-dev';

type Callback = (err: ?Error, sources: ?AVAudioSessionDataSourceDescription[]) => void;

export type AppleAVAudioSessionInputDataSourcesGet = (cb: Callback) => void;
