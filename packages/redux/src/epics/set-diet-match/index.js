// @flow

import {
  filter as mostFilter,
  join as mostJoin,
  just as mostJust,
  map as mostMap,
  mergeArray as mostMergeArray,
} from 'most';

import actionSetDietMatch from '../../actions/set-diet-match';
import ENTITY_RECOGNITION_RESULT from '../../constants/entity-recognition-result';
import { SERVICE_TRANSLATION_SEGMENT_TYPE_DIET } from '../../types/ServiceTranslationSegmentType';

export default (action$: any) => {
  const result$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === ENTITY_RECOGNITION_RESULT,
      action$,
    ),
  );

  const dietMatch$$ = mostMap(
    (result) => {
      const dietMatches = [];

      if (result.response.translations.length > 0) {
        result.response.translations[0].segments.forEach((segment, i) => {
          if (segment.type === SERVICE_TRANSLATION_SEGMENT_TYPE_DIET) {
            dietMatches.push(mostJust(actionSetDietMatch({
              result: { index: result.index },
              segment: { index: i, value: segment },
            })));
          }
        });
      }

      return mostMergeArray(dietMatches);
    },
    result$,
  );

  return mostJoin(dietMatch$$);
};
