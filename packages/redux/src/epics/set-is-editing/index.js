// @flow

import {
  filter as mostFilter,
  just as mostJust,
  map as mostMap,
  startWith as mostStartWith,
  switchLatest as mostSwitchLatest,
} from 'most';

import actionSetIsEditing from '../../actions/set-is-editing';
import REQUEST_SET_IS_EDITING from '../../constants/request-set-is-editing';
import getIsTracking from '../../observables/is-tracking';

export default (action$: any) => {
  const isTracking$ = getIsTracking(action$);

  const requestSetIsEditing$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === REQUEST_SET_IS_EDITING,
      action$,
    ),
  );

  const isEditing$ = mostSwitchLatest(mostMap(
    (isTracking) => (isTracking ?
      mostStartWith(true, requestSetIsEditing$) :
      mostJust(false)
    ),
    isTracking$,
  ));

  return mostMap(
    actionSetIsEditing,
    isEditing$,
  );
};
