// @flow

import { AV_AUDIO_SESSION_ORIENTATION_FRONT } from '@talk-to-track/js-apple-dev';

import {
  filter as mostFilter,
  fromPromise as mostFromPromise,
  map as mostMap,
  switchLatest as mostSwitchLatest,
  take as mostTake,
} from 'most';

import actionSetAudioInputId from '../../actions/set-audio-input-id';
import REQUEST_START_TRACKING from '../../constants/request-start-tracking';
import type { EpicOptionsSetAudioInputId as Options } from '../../types/EpicOptionsSetAudioInputId';

export default (opts: Options, action$: any) => {
  const requestStartTracking$ = mostFilter(
    action => action.type === REQUEST_START_TRACKING,
    action$,
  );

  const firstRequestStartTracking$ = mostTake(1, requestStartTracking$);

  const audioInputs$ = mostSwitchLatest(mostMap(
    () => mostFromPromise(new Promise(resolve => (
      opts.appleAVAudioSessionInputDataSourcesGet((err, sources) => (sources == null ?
        resolve([]) :
        resolve(sources)
      ))
    ))),
    firstRequestStartTracking$,
  ));

  const preferredAudioInput$ = mostMap(
    inputs => inputs.find(input => input.orientation === AV_AUDIO_SESSION_ORIENTATION_FRONT),
    audioInputs$,
  );

  const preferredAudioInputId$ = mostMap(
    input => (input ? input.dataSourceID : null),
    preferredAudioInput$,
  );

  return mostMap(
    actionSetAudioInputId,
    preferredAudioInputId$,
  );
};
