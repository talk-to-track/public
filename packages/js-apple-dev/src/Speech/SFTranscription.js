// @flow

import type { SFTranscriptionSegment } from './SFTranscriptionSegment';

export type SFTranscription = {
  formattedString: string,
  segments: SFTranscriptionSegment[],
};
