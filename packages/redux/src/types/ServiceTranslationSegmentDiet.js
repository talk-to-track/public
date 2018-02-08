// @flow

import type { ServiceFoodPortion } from './ServiceFoodPortion';
import type { ServiceTranslationSegmentTypeDiet } from './ServiceTranslationSegmentType';

export type ServiceTranslationSegmentDiet = {|
  type: ServiceTranslationSegmentTypeDiet,
  value: {| foodPortion: ServiceFoodPortion |},
|};
