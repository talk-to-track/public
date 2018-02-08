// @flow

import { List as ImmutableList, Map as ImmutableMap } from 'immutable';
import { combine as mostCombine, filter as mostFilter, map as mostMap } from 'most';
import actionSetDietMatchNutritionData from '../../actions/set-diet-match-nutrition-data';
import SET_FOODS from '../../constants/set-foods';
import SET_MATCH from '../../constants/set-match';
import addFoodNutritionData from '../../immutable/operations/add-food-nutrition-data';
import ImmutableFoodNutritionData from '../../immutable/structures/FoodNutritionData';
import { SERVICE_TRANSLATION_SEGMENT_TYPE_DIET } from '../../types/ServiceTranslationSegmentType';

const calculate = (
  foods: any,
  foodPortions: any,
  foodNutritionData: any = new ImmutableFoodNutritionData(),
  multiplier: number = 1,
) => {
  let nextFoodNutritionData = foodNutritionData;

  foodPortions.forEach((foodPortion) => {
    const nextMultiplier = multiplier * foodPortion.get('qty');
    const foodId = foodPortion.get('foodID');

    if (foodPortion.get('foodPortions')) {
      nextFoodNutritionData = calculate(
        foods,
        foodPortion.get('foodPortions'),
        nextFoodNutritionData,
        nextMultiplier,
      );
    }

    nextFoodNutritionData = addFoodNutritionData(
      nextFoodNutritionData,
      foods.getIn([`${foodId}`, 'nutriValues'], new ImmutableFoodNutritionData()),
      nextMultiplier,
    );
  });

  return nextFoodNutritionData;
};

export default (action$: any) => {
  const foods$ = mostMap(
    action => action.payload,
    mostFilter(
      action => action.type === SET_FOODS,
      action$,
    ),
  );

  const dietMatch$ = mostMap(
    action => action.payload,
    mostFilter(
      action => (
        action.type === SET_MATCH &&
        action.payload.getIn(['segment', 'value', 'type']) === SERVICE_TRANSLATION_SEGMENT_TYPE_DIET
      ),
      action$,
    ),
  );

  const dietMatchNutritionData$ = mostCombine(
    (dietMatch, foods) => {
      const foodPortion = dietMatch.getIn(['segment', 'value', 'value', 'foodPortion']);
      const nutritionData = calculate(foods, new ImmutableList([foodPortion]));

      return new ImmutableMap({
        result: new ImmutableMap({
          index: dietMatch.getIn(['result', 'index']),
        }),
        segment: {
          index: dietMatch.getIn(['segment', 'index']),
          value: new ImmutableMap({ nutritionData }),
        },
      });
    },
    dietMatch$,
    foods$,
  );

  return mostMap(
    actionSetDietMatchNutritionData,
    dietMatchNutritionData$,
  );
};
