// @flow

import {
  combineArray as mostCombineArray,
  constant as mostConstant,
  filter as mostFilter,
  map as mostMap,
  merge as mostMerge,
} from 'most';

import actionStartRecording from '../../actions/start-recording';
import REQUEST_START_RECORDING from '../../constants/request-start-recording';
import SET_AUDIO_INPUT_ID from '../../constants/set-audio-input-id';
import SET_PERMISSION from '../../constants/set-permission';
import STOP_RECORDING from '../../constants/stop-recording';

export default (action$: any) => {
  const requestStartRecording$ = mostFilter(
    action => action.type === REQUEST_START_RECORDING,
    action$,
  );

  const stopRecording$ = mostFilter(
    action => action.type === STOP_RECORDING,
    action$,
  );

  const wantsToStart$ = mostMerge(
    mostConstant(true, requestStartRecording$),
    mostConstant(false, stopRecording$),
  );

  const hasAudioInputId$ = mostMap(
    action => action.payload !== undefined,
    mostFilter(
      action => action.type === SET_AUDIO_INPUT_ID,
      action$,
    ),
  );

  const hasPermission$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === SET_PERMISSION,
      action$,
    ),
  );

  const start$ = mostFilter(
    start => start,
    mostCombineArray(
      (wantsToStart, hasAudioInputId, hasPermission) => wantsToStart && hasAudioInputId && hasPermission,
      [wantsToStart$, hasAudioInputId$, hasPermission$],
    ),
  );

  return mostMap(
    actionStartRecording,
    start$,
  );
};
