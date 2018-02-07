// @flow

import { combine as mostCombine, filter as mostFilter, map as mostMap } from 'most';
import actionSetDietMatchNutritionData from '../../actions/set-diet-match-nutrition-data';
import SET_DIET_MATCH from '../../constants/set-diet-match';
import SET_FOODS from '../../constants/set-foods';
import addFoodNutritionData from '../../immutable/operations/add-food-nutrition-data';
import ImmutableFoodNutritionData from '../../immutable/structures/FoodNutritionData';
import type { ServiceFoodPortion } from '../../types/ServiceFoodPortion';

const calculate = (
  foods: any,
  foodPortions: ServiceFoodPortion[],
  foodNutritionData: any = new ImmutableFoodNutritionData(),
  multiplier: number = 1,
) => {
  let nextFoodNutritionData = foodNutritionData;

  foodPortions.forEach((foodPortion) => {
    const nextMultiplier = multiplier * foodPortion.qty;

    if (foodPortion.foodPortions) {
      nextFoodNutritionData = calculate(
        foods,
        foodPortion.foodPortions,
        nextFoodNutritionData,
        nextMultiplier,
      );
    }

    nextFoodNutritionData = addFoodNutritionData(
      nextFoodNutritionData,
      foods.getIn([`${foodPortion.foodID}`, 'nutriValues'], new ImmutableFoodNutritionData()),
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
      action => action.type === SET_DIET_MATCH,
      action$,
    ),
  );

  const dietMatchNutritionData$ = mostCombine(
    (dietMatch, foods) => {
      const { foodPortions } = dietMatch.segment.value.value;
      const nutritionData = calculate(foods, foodPortions);

      return {
        result: {
          index: dietMatch.result.index,
        },
        segment: {
          index: dietMatch.segment.index,
          value: { nutritionData },
        },
      };
    },
    dietMatch$,
    foods$,
  );

  return mostMap(
    actionSetDietMatchNutritionData,
    dietMatchNutritionData$,
  );
};
