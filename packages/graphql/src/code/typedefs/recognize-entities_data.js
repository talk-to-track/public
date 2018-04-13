// @flow

import RecognizeEntitiesResult from './recognize-entities_result';

const RecognizeEntitiesData = `
  type RecognizeEntitiesData {
    result: RecognizeEntitiesResult
  }
`;

export default [
  RecognizeEntitiesData,
  ...RecognizeEntitiesResult,
];
