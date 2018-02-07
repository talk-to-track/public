// @flow

import type { FoodNutritionData } from './FoodNutritionData';

export type DietMatchNutritionData = {|
  result: {|
    index: number,
  |},
  segment: {|
    index: number,
    value: {|
      nutritionData: FoodNutritionData,
    |},
  |},
|};
