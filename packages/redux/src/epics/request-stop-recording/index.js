// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import actionRequestStopRecording from '../../actions/request-stop-recording';
import STOP_TRACKING from '../../constants/stop-tracking';

export default (action$: any) => (
  mostMap(
    actionRequestStopRecording,
    mostFilter(
      action => action.type === STOP_TRACKING,
      action$,
    ),
  )
);
