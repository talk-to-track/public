// @flow

import { List as ImmutableList } from 'immutable';

import {
  constant as mostConstant,
  filter as mostFilter,
  map as mostMap,
  merge as mostMerge,
  scan as mostScan,
} from 'most';

import actionSetDietTotalMatchNutritionData from '../../actions/set-diet-total-match-nutrition-data';
import SET_DIET_MATCH_NUTRITION_DATA from '../../constants/set-diet-match-nutrition-data';
import addFoodNutritionData from '../../immutable/operations/add-food-nutrition-data';
import ImmutableFoodNutritionData from '../../immutable/structures/FoodNutritionData';
import getStoppedTracking from '../../observables/stopped-tracking';

export default (action$: any) => {
  const setDietMatchNutritionData$ = mostMap(
    action => ({ type: 'SET', value: action.payload }),
    mostFilter(
      action => action.type === SET_DIET_MATCH_NUTRITION_DATA,
      action$,
    ),
  );

  const resetDietMatchNutritionData$ = mostConstant(
    { type: 'RESET' },
    getStoppedTracking(action$),
  );

  const dietMatchNutritionData$ = mostMerge(
    setDietMatchNutritionData$,
    resetDietMatchNutritionData$,
  );

  const allNutritionData$ = mostScan(
    (state, dietMatchNutritionData) => {
      if (dietMatchNutritionData.type === 'RESET') {
        return state.clear();
      }

      const resultIndex = dietMatchNutritionData.value.result.index;
      const segmentIndex = dietMatchNutritionData.value.segment.index;
      const foodNutritionData = dietMatchNutritionData.value.segment.value.nutritionData;

      return state.update(
        resultIndex,
        new ImmutableList(),
        segments => segments.set(segmentIndex, foodNutritionData),
      );
    },
    new ImmutableList(),
    dietMatchNutritionData$,
  );

  const totalDietMatchNutritionData$ = mostMap(
    (results) => {
      let foodNutritionData = new ImmutableFoodNutritionData();

      results.forEach((segments) => {
        if (segments) {
          segments.forEach((data) => {
            foodNutritionData = addFoodNutritionData(foodNutritionData, data);
          });
        }
      });

      return foodNutritionData;
    },
    allNutritionData$,
  );

  return mostMap(
    actionSetDietTotalMatchNutritionData,
    totalDietMatchNutritionData$,
  );
};
