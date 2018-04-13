// @flow

import createResolverAuthenticateClient from './query_authenticate-client';
import createResolverGetFoods from './query_get-foods';
import createResolverRecognizeEntities from './query_recognize-entities';
import type { ResolverConfig } from '../../types/flow/ResolverConfig';

export default (vars: ResolverConfig) => ({
  authenticateClient: createResolverAuthenticateClient(vars),
  getFoods: createResolverGetFoods(vars),
  recognizeEntities: createResolverRecognizeEntities(vars),
});
