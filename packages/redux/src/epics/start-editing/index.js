// @flow

import { map as mostMap } from 'most';
import actionRequestSetIsEditing from '../../actions/request-set-is-editing';
import getIsTracking from '../../observables/is-tracking';

export default (action$: any) => (
  mostMap(
    actionRequestSetIsEditing,
    getIsTracking(action$),
  )
);
