// @flow

import type { SFSpeechRecognitionTaskHint } from './SFSpeechRecognitionTaskHint';

export type SFSpeechRecognitionRequest = {
  contextualStrings?: string[],
  interactionIdentifier?: ?string,
  shouldReportPartialResults?: boolean,
  taskHint?: SFSpeechRecognitionTaskHint,
};
