// @flow

type Callback = (err: ?Error, permission: ?boolean) => void

export type AppleAVAudioSessionRequestRecordPermission = (cb: Callback) => void;
