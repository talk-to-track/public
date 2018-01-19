// @flow

export const AV_AUDIO_SESSION_ORIENTATION_BACK = 'Back';
export const AV_AUDIO_SESSION_ORIENTATION_BOTTOM = 'Bottom';
export const AV_AUDIO_SESSION_ORIENTATION_FRONT = 'Front';
export const AV_AUDIO_SESSION_ORIENTATION_LEFT = 'Left';
export const AV_AUDIO_SESSION_ORIENTATION_RIGHT = 'Right';
export const AV_AUDIO_SESSION_ORIENTATION_TOP = 'Top';

export type AVAudioSessionOrientationBack = 'Back';
export type AVAudioSessionOrientationBottom = 'Bottom';
export type AVAudioSessionOrientationFront = 'Front';
export type AVAudioSessionOrientationLeft = 'Left';
export type AVAudioSessionOrientationRight = 'Right';
export type AVAudioSessionOrientationTop = 'Top';

export type AVAudioSessionOrientation = (
  | AVAudioSessionOrientationBack
  | AVAudioSessionOrientationBottom
  | AVAudioSessionOrientationFront
  | AVAudioSessionOrientationLeft
  | AVAudioSessionOrientationRight
  | AVAudioSessionOrientationTop
);
