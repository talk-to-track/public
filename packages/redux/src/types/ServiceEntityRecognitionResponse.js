// @flow

import type { ServiceFood } from './ServiceFood';
import type { ServiceTranslation } from './ServiceTranslation';

export type ServiceEntityRecognitionResponse = {|
  entities: {|
    foods?: { [string]: ServiceFood }
  |},
  text: string,
  translations: ServiceTranslation[],
|};
