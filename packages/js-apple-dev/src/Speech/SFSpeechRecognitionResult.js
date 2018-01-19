// @flow

import type { SFTranscription } from './SFTranscription';

export type SFSpeechRecognitionResult = {
  bestTranscription: ?SFTranscription,
  isFinal: boolean,
  transcriptions: SFTranscription[],
};
