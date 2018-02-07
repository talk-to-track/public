// @flow

import type from '../constants/set-diet-match-nutrition-data';
import type { DietMatchNutritionData } from '../types/FoodNutritionData';

export default (payload: DietMatchNutritionData) => ({ type, payload });
