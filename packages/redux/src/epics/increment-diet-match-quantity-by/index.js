// @flow

import { filter as mostFilter, map as mostMap, sample as mostSample } from 'most';
import actionSetMatch from '../../actions/set-match';
import INCREMENT_DIET_MATCH_QUANTITY_BY from '../../constants/increment-diet-match-quantity-by';
import SET_MATCHES from '../../constants/set-matches';

export default (action$: any) => {
  const incrementDietMatchQuantityBy$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === INCREMENT_DIET_MATCH_QUANTITY_BY,
      action$,
    ),
  );

  const matches$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === SET_MATCHES,
      action$,
    ),
  );

  const updatedMatch$ = mostSample(
    (matches, increment) => {
      const match = matches.getIn([increment.resultIndex, increment.segmentIndex]);
      const quantityPath = ['segment', 'value', 'value', 'foodPortion', 'qty'];
      return match.updateIn(quantityPath, qty => qty + increment.count);
    },
    incrementDietMatchQuantityBy$,
    matches$,
    incrementDietMatchQuantityBy$,
  );

  return mostMap(
    actionSetMatch,
    updatedMatch$,
  );
};
