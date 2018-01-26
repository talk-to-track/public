// @flow

import { constant as mostConstant, merge as mostMerge, skipRepeats as mostSkipRepeats } from 'most';
import getActionStartRecording from './action-start-recording';
import getActionStopRecording from './action-stop-recording';

export default (action$: any) => {
  const actionStartRecording$ = getActionStartRecording(action$);
  const actionStopRecording$ = getActionStopRecording(action$);

  return mostSkipRepeats(mostMerge(
    mostConstant(true, actionStartRecording$),
    mostConstant(false, actionStopRecording$),
  ));
};
