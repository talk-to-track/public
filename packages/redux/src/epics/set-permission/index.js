// @flow

import { SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_AUTHORIZED } from '@talk-to-track/js-apple-dev';

import {
  combine as mostCombine,
  filter as mostFilter,
  fromPromise as mostFromPromise,
  map as mostMap,
  switchLatest as mostSwitchLatest,
  take as mostTake,
} from 'most';

import actionSetPermission from '../../actions/set-permission';
import REQUEST_START_TRACKING from '../../constants/request-start-tracking';
import type { EpicOptionsSetPermission as Options } from '../../types/EpicOptionsSetPermission';

export default (opts: Options, action$: any) => {
  const requestStartTracking$ = mostFilter(
    action => action.type === REQUEST_START_TRACKING,
    action$,
  );

  const firstRequestStartTracking$ = mostTake(1, requestStartTracking$);

  const audioPermission$ = mostSwitchLatest(mostMap(
    () => mostFromPromise(new Promise(resolve => (
      opts.appleAVAudioSessionRequestRecordPermission((err, permission) => (permission == null ?
        resolve(false) :
        resolve(permission)
      ))
    ))),
    firstRequestStartTracking$,
  ));

  const speechPermission$ = mostSwitchLatest(mostMap(
    () => mostFromPromise(new Promise(resolve => (
      opts.appleSFSpeechRecognizerRequestAuthorization((err, status) => (status == null ?
        resolve(false) :
        resolve(status === SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_AUTHORIZED)
      ))
    ))),
    firstRequestStartTracking$,
  ));

  const permission$ = mostCombine(
    (audioPermission, speechPermission) => audioPermission && speechPermission,
    audioPermission$,
    speechPermission$,
  );

  return mostMap(
    actionSetPermission,
    permission$,
  );
};
