// @flow

import { constant as mostConstant, merge as mostMerge, skipRepeats as mostSkipRepeats } from 'most';
import getActionStartTracking from './action-start-tracking';
import getActionStopTracking from './action-stop-tracking';

export default (action$: any) => {
  const actionStartTracking$ = getActionStartTracking(action$);
  const actionStopTracking$ = getActionStopTracking(action$);

  return mostSkipRepeats(mostMerge(
    mostConstant(true, actionStartTracking$),
    mostConstant(false, actionStopTracking$),
  ));
};
