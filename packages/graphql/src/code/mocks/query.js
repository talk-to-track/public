// @flow

import authenticateClient from './query_authenticate-client';
import getFoods from './query_get-foods';
import recognizeEntities from './query_recognize-entities';

export default () => ({
  authenticateClient,
  getFoods,
  recognizeEntities,
});
