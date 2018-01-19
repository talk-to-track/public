// @flow

import type { NSRange } from '../Foundation/NSRange';

export type SFTranscriptionSegment = {
  alternativeSubstrings: string[],
  confidence: number,
  duration: number,
  substring: string,
  substringRange: NSRange,
  timestamp: number,
};
