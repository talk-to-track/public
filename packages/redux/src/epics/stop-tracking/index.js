// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import actionStopTracking from '../../actions/stop-tracking';
import REQUEST_STOP_TRACKING from '../../constants/request-stop-tracking';

export default (action$: any) => (
  mostMap(
    actionStopTracking,
    mostFilter(
      action => action.type === REQUEST_STOP_TRACKING,
      action$,
    ),
  )
);
