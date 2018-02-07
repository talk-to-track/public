// @flow

import { filter as mostFilter } from 'most';
import getIsTracking from './is-tracking';

export default (action$: any) => (
  mostFilter(
    isTracking => !isTracking,
    getIsTracking(action$),
  )
);
