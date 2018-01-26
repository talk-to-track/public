// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import actionStopRecording from '../../actions/stop-recording';
import REQUEST_STOP_RECORDING from '../../constants/request-stop-recording';
import SET_RECORDING_IDLE from '../../constants/set-recording-idle';

export default (action$: any) => (
  mostMap(
    actionStopRecording,
    mostFilter(
      action => (
        action.type === REQUEST_STOP_RECORDING ||
        action.type === SET_RECORDING_IDLE
      ),
      action$,
    ),
  )
);
