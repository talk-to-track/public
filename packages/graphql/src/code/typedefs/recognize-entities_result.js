// @flow

import Entities from './entities';
import Translation from './translation';

const RecognizeEntitiesResult = `
  type RecognizeEntitiesResult {
    entities: Entities!,
    translations: [Translation!]!
  }
`;

export default [
  ...Entities,
  RecognizeEntitiesResult,
  ...Translation,
];
