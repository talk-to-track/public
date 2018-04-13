// @flow

import type { Entities } from './Entities';
import type { Translation } from './Translation';

export type RecognizeEntitiesResult = {|
  __typename: 'RecognizeEntitiesResult',
  entities: Entities,
  translations: Translation[],
|};
