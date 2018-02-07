// @flow

import { fromJS as immutableFromJS, Map as ImmutableMap } from 'immutable';

import {
  filter as mostFilter,
  map as mostMap,
  scan as mostScan,
  skipRepeats as mostSkipRepeats,
} from 'most';

import actionSetFoods from '../../actions/set-foods';
import LOAD_FOODS from '../../constants/load-foods';

export default (action$: any) => {
  const actionLoadFoods$ = mostFilter(
    action => action.type === LOAD_FOODS,
    action$,
  );

  const newFoods$ = mostMap(
    action => action.payload,
    actionLoadFoods$,
  );

  const foods$ = mostSkipRepeats(mostScan(
    (foods, newFoods) => foods.mergeDeep(immutableFromJS(newFoods)),
    new ImmutableMap(),
    newFoods$,
  ));

  return mostMap(
    actionSetFoods,
    foods$,
  );
};
