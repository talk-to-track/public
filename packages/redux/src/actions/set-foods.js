// @flow

import type from '../constants/set-foods';
import type { ServiceFoodNutritionData } from '../types/ServiceFoodNutritionData';

export default (payload: ServiceFoodNutritionData) => ({ type, payload });
