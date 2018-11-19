// @flow

import { List as ImmutableList } from 'immutable';
import { filter as mostFilter, map as mostMap, merge as mostMerge, scan as mostScan } from 'most';
import actionSetMatches from '../../actions/set-matches';
import CLEAR from '../../constants/clear';
import SET_MATCH from '../../constants/set-match';

export default (action$: any) => {
  const clearMatchesAction$ = mostFilter(
    action => action.type === CLEAR,
    action$,
  );

  const setMatchAction$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === SET_MATCH,
      action$,
    ),
  );

  const matches$ = mostScan(
    (matches, action) => {
      if (action.type === CLEAR) return matches.clear();
      const { match } = action.payload;
      const resultIndex = match.getIn(['result', 'index']);
      const segmentIndex = match.getIn(['segment', 'index']);
      return matches.setIn([resultIndex, segmentIndex], match);
    },
    new ImmutableList(),
    mostMerge(clearMatchesAction$, setMatchAction$),
  );

  return mostMap(
    actionSetMatches,
    matches$,
  );
};
