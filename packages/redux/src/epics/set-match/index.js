// @flow

import { fromJS as immutableFromJS } from 'immutable';

import {
  filter as mostFilter,
  join as mostJoin,
  just as mostJust,
  map as mostMap,
  mergeArray as mostMergeArray,
} from 'most';

import actionSetMatch from '../../actions/set-match';
import ENTITY_RECOGNITION_RESULT from '../../constants/entity-recognition-result';

export default (action$: any) => {
  const result$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === ENTITY_RECOGNITION_RESULT,
      action$,
    ),
  );

  const match$$ = mostMap(
    (result) => {
      const matches = [];

      if (result.response.translations.length > 0) {
        result.response.translations[0].segments.forEach((segment, i) => {
          matches.push(mostJust(actionSetMatch(immutableFromJS({
            result: { index: result.index },
            segment: { index: i, value: segment },
          }))));
        });
      }

      return mostMergeArray(matches);
    },
    result$,
  );

  return mostJoin(match$$);
};
