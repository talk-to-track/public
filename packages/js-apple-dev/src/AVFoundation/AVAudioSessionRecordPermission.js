// @flow

export const AV_AUDIO_SESSION_RECORD_PERMISSION_DENIED = 1684369017;
export const AV_AUDIO_SESSION_RECORD_PERMISSION_GRANTED = 1735552628;
export const AV_AUDIO_SESSION_RECORD_PERMISSION_UNDETERMINED = 1970168948;

export type AVAudioSessionRecordPermissionDenied = 1684369017;
export type AVAudioSessionRecordPermissionGranted = 1735552628;
export type AVAudioSessionRecordPermissionUndetermined = 1970168948;

export type AVAudioSessionRecordPermission = (
  | AVAudioSessionRecordPermissionDenied
  | AVAudioSessionRecordPermissionGranted
  | AVAudioSessionRecordPermissionUndetermined
);
