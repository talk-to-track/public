// @flow

import type from '../constants/set-diet-match-nutrition-data';
import type { ImmutableFoodNutritionData } from '../types/ImmutableFoodNutritionData';

export default (payload: ImmutableFoodNutritionData) => ({ type, payload });
