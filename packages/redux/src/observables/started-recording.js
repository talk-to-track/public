// @flow

import { filter as mostFilter } from 'most';
import getIsRecording from './is-recording';

export default (action$: any) => (
  mostFilter(
    isRecording => isRecording,
    getIsRecording(action$),
  )
);
