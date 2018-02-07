// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import actionLoadFoods from '../../actions/load-foods';
import ENTITY_RECOGNITION_RESULT from '../../constants/entity-recognition-result';

export default (action$: any) => {
  const actionEntityRecognitionResult$ = mostFilter(
    action => action.type === ENTITY_RECOGNITION_RESULT,
    action$,
  );

  const foods$ = mostFilter(
    foods => foods,
    mostMap(
      action => action.payload.response.entities.foods,
      actionEntityRecognitionResult$,
    ),
  );

  return mostMap(
    actionLoadFoods,
    foods$,
  );
};
