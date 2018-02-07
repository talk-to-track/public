// @flow

import { filter as mostFilter } from 'most';
import ENTITY_RECOGNITION_RESULT from '../constants/entity-recognition-result';

export default (action$: any) => (
  mostFilter(
    action => action.type === ENTITY_RECOGNITION_RESULT,
    action$,
  )
);
