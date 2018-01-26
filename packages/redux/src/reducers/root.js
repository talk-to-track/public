// @flow

import { List as ImmutableList, Record as createImmutableRecord } from 'immutable';
import FINALIZE_SPEECH_RECOGNITION from '../constants/finalize-speech-recognition';
import MATCH_FOOD from '../constants/match-food';
import SET_PERMISSION from '../constants/set-permission';
import SET_SPEECH_RECOGNITION_TEXT from '../constants/set-speech-recognition-text';
import START_RECORDING from '../constants/start-recording';
import START_TRACKING from '../constants/start-tracking';
import STOP_RECORDING from '../constants/stop-recording';
import STOP_TRACKING from '../constants/stop-tracking';

const createDefaultResult = createImmutableRecord({
  id: 0,
  text: '',
});

const createDefaultState = createImmutableRecord({
  finalResults: new ImmutableList(),
  hasPermission: null,
  isRecording: false,
  isTracking: false,
  partialResult: createDefaultResult(),
});

const defaultState = createDefaultState();

export default (state: any = defaultState, action: any) => {
  switch (action.type) {
    case FINALIZE_SPEECH_RECOGNITION: {
      return state
        .update('finalResults', results => results.push(state.get('partialResult')))
        .set('partialResult', createDefaultResult());
    }
    case MATCH_FOOD: {
      const { index } = action.payload;

      return state
        .setIn(['finalResults', index, 'id'], action.payload.result.id)
        .setIn(['finalResults', index, 'text'], action.payload.result.text);
    }
    case SET_PERMISSION:
      return state.set('hasPermission', action.payload);
    case SET_SPEECH_RECOGNITION_TEXT: {
      return state.setIn(['partialResult', 'text'], action.payload);
    }
    case START_RECORDING:
      return state.set('isRecording', true);
    case START_TRACKING:
      return state.set('isTracking', true);
    case STOP_RECORDING:
      return state.set('isRecording', false);
    case STOP_TRACKING:
      return state
        .set('finalResults', new ImmutableList())
        .set('isTracking', false)
        .set('partialResult', createDefaultResult());
    default:
      return state;
  }
};
