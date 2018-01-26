// @flow

type Callback = (err: ?Error) => void;

export type AppleSFSpeechRecognizerRecognitionTaskAudioBufferCancel = (
  id: string,
  cb: Callback,
) => void;
