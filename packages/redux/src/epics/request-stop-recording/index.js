// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import actionRequestStopRecording from '../../actions/request-stop-recording';
import SET_IS_EDITING from '../../constants/set-is-editing';

export default (action$: any) => (
  mostMap(
    actionRequestStopRecording,
    mostFilter(
      action => action.type === SET_IS_EDITING && !action.payload,
      action$,
    ),
  )
);
