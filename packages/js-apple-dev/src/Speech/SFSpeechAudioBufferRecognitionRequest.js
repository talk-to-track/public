// @flow

import type { SFSpeechRecognitionRequest } from './SFSpeechRecognitionRequest';

export type SFSpeechAudioBufferRecognitionRequest = {
  audioSessionDataSourceID?: string,
  ...SFSpeechRecognitionRequest,
};
