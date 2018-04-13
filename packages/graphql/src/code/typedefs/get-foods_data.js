// @flow

import GetFoodsError from './get-foods_error';
import GetFoodsResult from './get-foods_result';

const GetFoodsData = `
  type GetFoodsData {
    errors: [GetFoodsError]
    result: GetFoodsResult
  }
`;

export default [
  GetFoodsData,
  ...GetFoodsError,
  ...GetFoodsResult,
];
