// @flow

import GetFoodsErrorNotFoundCode from './get-foods_error_not-found_code';
import GetFoodsErrorNotFoundData from './get-foods_error_not-found_data';

const GetFoodsErrorNotFound = `
  type GetFoodsErrorNotFound {
    code: GetFoodsErrorNotFoundCode
    data: GetFoodsErrorNotFoundData
    message: String
  }
`;

export default [
  GetFoodsErrorNotFound,
  ...GetFoodsErrorNotFoundCode,
  ...GetFoodsErrorNotFoundData,
];
