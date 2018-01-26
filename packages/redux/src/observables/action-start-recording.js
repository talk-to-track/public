// @flow

import { filter as mostFilter } from 'most';
import START_RECORDING from '../constants/start-recording';

export default (action$: any) => (
  mostFilter(
    action => action.type === START_RECORDING,
    action$,
  )
);
