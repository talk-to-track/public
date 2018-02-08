// @flow

import { List as ImmutableList } from 'immutable';
import { filter as mostFilter, map as mostMap, scan as mostScan } from 'most';
import actionSetMatches from '../../actions/set-matches';
import SET_MATCH from '../../constants/set-match';

export default (action$: any) => {
  const match$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === SET_MATCH,
      action$,
    ),
  );

  const matches$ = mostScan(
    (matches, match) => {
      const resultIndex = match.getIn(['result', 'index']);
      const segmentIndex = match.getIn(['segment', 'index']);
      return matches.setIn([resultIndex, segmentIndex], match);
    },
    new ImmutableList(),
    match$,
  );

  return mostMap(
    actionSetMatches,
    matches$,
  );
};
