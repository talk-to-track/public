// @flow

import Food from './food';

const GetFoodsResult = `
  type GetFoodsResult {
    foods: [Food!]!,
  }
`;

export default [
  ...Food,
  GetFoodsResult,
];
