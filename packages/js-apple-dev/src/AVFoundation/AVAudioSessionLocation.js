// @flow

export const AV_AUDIO_SESSION_LOCATION_LOWER = 'Lower';
export const AV_AUDIO_SESSION_LOCATION_UPPER = 'Upper';

export type AVAudioSessionLocationLower = 'Lower';
export type AVAudioSessionLocationUpper = 'Upper';

export type AVAudioSessionLocation = (
  | AVAudioSessionLocationLower
  | AVAudioSessionLocationUpper
);
