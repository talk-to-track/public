// @flow

import { filter as mostFilter } from 'most';
import STOP_RECORDING from '../constants/stop-recording';

export default (action$: any) => (
  mostFilter(
    action => action.type === STOP_RECORDING,
    action$,
  )
);
