// @flow

import type { ServiceFoodMatch } from './ServiceFoodMatch';
import type { ServiceFoods } from './ServiceFoods';

export type ServiceData = {
  foodMatches: ServiceFoodMatch[],
  foods: ServiceFoods,
};
