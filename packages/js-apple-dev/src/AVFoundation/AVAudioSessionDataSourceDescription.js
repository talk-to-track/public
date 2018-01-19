// @flow

import type { AVAudioSessionLocation } from './AVAudioSessionLocation';
import type { AVAudioSessionOrientation } from './AVAudioSessionOrientation';

export type AVAudioSessionDataSourceDescription = {
  dataSourceID: number,
  dataSourceName: string,
  location: AVAudioSessionLocation,
  orientation: AVAudioSessionOrientation,
};
