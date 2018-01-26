// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import actionRequestStartRecording from '../../actions/request-start-recording';
import START_TRACKING from '../../constants/start-tracking';

export default (action$: any) => (
  mostMap(
    actionRequestStartRecording,
    mostFilter(
      action => action.type === START_TRACKING,
      action$,
    ),
  )
);
