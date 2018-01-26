// @flow

import { filter as mostFilter, map as mostMap } from 'most';
import actionRequestStartSpeechRecognition from '../../actions/request-start-speech-recognition';
import START_RECORDING from '../../constants/start-recording';

export default (action$: any) => (
  mostMap(
    actionRequestStartSpeechRecognition,
    mostFilter(
      action => action.type === START_RECORDING,
      action$,
    ),
  )
);
