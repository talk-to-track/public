// @flow

import type { ServiceFood } from './ServiceFood';
import type { ServiceEntityRecognitionResponse } from './ServiceEntityRecognitionResponse';

export type ServiceData = {|
  foods: { [string]: ServiceFood },
  matches: [RegExp, ServiceEntityRecognitionResponse][],
|};
