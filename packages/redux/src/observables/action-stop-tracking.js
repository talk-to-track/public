// @flow

import { filter as mostFilter } from 'most';
import STOP_TRACKING from '../constants/stop-tracking';

export default (action$: any) => (
  mostFilter(
    action => action.type === STOP_TRACKING,
    action$,
  )
);
