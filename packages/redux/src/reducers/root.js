// @flow

import { fromJS as immutableFromJS, List as ImmutableList, Record as createImmutableRecord } from 'immutable';
import FINALIZE_SPEECH_RECOGNITION from '../constants/finalize-speech-recognition';
import ENTITY_RECOGNITION_RESULT from '../constants/entity-recognition-result';
import SET_DIET_TOTAL_MATCH_NUTRITION_DATA from '../constants/set-diet-total-match-nutrition-data';
import SET_IS_EDITING from '../constants/set-is-editing';
import SET_PERMISSION from '../constants/set-permission';
import SET_SPEECH_RECOGNITION_TEXT from '../constants/set-speech-recognition-text';
import START_RECORDING from '../constants/start-recording';
import START_TRACKING from '../constants/start-tracking';
import STOP_RECORDING from '../constants/stop-recording';
import STOP_TRACKING from '../constants/stop-tracking';
import ImmutableFoodNutritionData from '../immutable/structures/FoodNutritionData';

const createPartialResult = createImmutableRecord({
  text: '',
});

const createFinalResult = createImmutableRecord({
  segments: new ImmutableList(),
  text: '',
});

const createState = createImmutableRecord({
  finalResults: new ImmutableList(),
  hasPermission: null,
  isEditing: false,
  isRecording: false,
  isTracking: false,
  partialResult: createPartialResult(),
  totalNutritionData: new ImmutableFoodNutritionData(),
});

export default (state: any = createState(), action: any) => {
  switch (action.type) {
    case FINALIZE_SPEECH_RECOGNITION: {
      return state
        .update('finalResults', results => (
          results.push(createFinalResult({
            text: state.get('partialResult'),
          }))
        ))
        .set('partialResult', createPartialResult());
    }
    case ENTITY_RECOGNITION_RESULT: {
      const { index, response } = action.payload;
      const translation = response.translations.length ? response.translations[0] : {};
      const translationSegments = translation.segments || [];

      return state
        .setIn(['finalResults', index, 'segments'], immutableFromJS(translationSegments))
        .setIn(['finalResults', index, 'text'], response.text);
    }
    case SET_DIET_TOTAL_MATCH_NUTRITION_DATA:
      return state.set('totalNutritionData', action.payload);
    case SET_IS_EDITING:
      return state.set('isEditing', action.payload);
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
        .set('partialResult', createPartialResult());
    default:
      return state;
  }
};
