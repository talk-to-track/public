// @flow

import type { ServiceFoodNutritionData } from './ServiceFoodNutritionData';

export type ServiceFood = {|
  foodID: number,
  foodName: string,
  foodPortions?: { foodID: number, unitID: number }[],
  nutriValues?: ServiceFoodNutritionData,
|};
