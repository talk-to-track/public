// @flow

import { merge as mostMerge, map as mostMap } from 'most';
import actionFinalizeSpeechRecognition from '../../actions/finalize-speech-recognition';
import type { EpicOptionsRestartSpeechRecognition as Options } from '../../types/EpicOptionsRestartSpeechRecognition';
import getFinalizeOnPause from './on-pause';
import getFinalizeOnKeyword from './on-keyword';

export default (opts: Options, action$: any) => (
  mostMap(
    actionFinalizeSpeechRecognition,
    mostMerge(
      getFinalizeOnPause(opts.nextPauseDuration, action$),
      getFinalizeOnKeyword(opts.nextKeyword, action$),
    ),
  )
);
