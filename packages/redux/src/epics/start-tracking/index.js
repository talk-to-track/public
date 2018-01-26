// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import actionStartTracking from '../../actions/start-tracking';
import REQUEST_START_TRACKING from '../../constants/request-start-tracking';

export default (action$: any) => (
  mostMap(
    actionStartTracking,
    mostFilter(
      action => action.type === REQUEST_START_TRACKING,
      action$,
    ),
  )
);
