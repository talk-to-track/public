// @flow

import type { RecognizeEntitiesData } from './RecognizeEntitiesData';
import type { GraphQLResponse } from './GraphQLResponse';

export type RecognizeEntitiesResponse = GraphQLResponse<{|
  recognizeEntities: RecognizeEntitiesData,
|}>;
