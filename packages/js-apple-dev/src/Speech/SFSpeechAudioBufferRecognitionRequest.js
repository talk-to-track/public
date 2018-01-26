// @flow

import type { SFSpeechRecognitionRequest } from './SFSpeechRecognitionRequest';

type AudioSession = {
  audioSessionDataSourceID?: string,
};

export type SFSpeechAudioBufferRecognitionRequest = (
  & AudioSession
  & SFSpeechRecognitionRequest
);
