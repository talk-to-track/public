// @flow

import GetFoodsErrorNotFound from './get-foods_error_not-found';

const GetFoodsError = `
  union GetFoodsError = GetFoodsErrorNotFound
`;

export default [
  GetFoodsError,
  ...GetFoodsErrorNotFound,
];
