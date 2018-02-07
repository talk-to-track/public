// @flow

import type from '../constants/set-diet-total-match-nutrition-data';
import type { FoodNutritionData } from '../types/FoodNutritionData';

export default (payload: FoodNutritionData) => ({ type, payload });
