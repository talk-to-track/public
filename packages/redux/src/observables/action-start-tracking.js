// @flow

import { filter as mostFilter } from 'most';
import START_TRACKING from '../constants/start-tracking';

export default (action$: any) => (
  mostFilter(
    action => action.type === START_TRACKING,
    action$,
  )
);
