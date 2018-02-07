// @flow

import type { EpicOptionsCancelSpeechRecognition } from './EpicOptionsCancelSpeechRecognition';
import type { EpicOptionsMatch } from './EpicOptionsMatch';
import type { EpicOptionsSetAudioInputId } from './EpicOptionsSetAudioInputId';
import type { EpicOptionsSetPermission } from './EpicOptionsSetPermission';
import type { EpicOptionsRestartSpeechRecognition } from './EpicOptionsRestartSpeechRecognition';
import type { EpicOptionsSetRecordingIdle } from './EpicOptionsSetRecordingIdle';
import type { EpicOptionsStartSpeechRecognition } from './EpicOptionsStartSpeechRecognition';

export type EpicOptionsRoot = (
  & EpicOptionsCancelSpeechRecognition
  & EpicOptionsMatch
  & EpicOptionsRestartSpeechRecognition
  & EpicOptionsSetAudioInputId
  & EpicOptionsSetPermission
  & EpicOptionsSetRecordingIdle
  & EpicOptionsStartSpeechRecognition
);
