// @flow

import type { Food } from './Food';

export type GetFoodsResult = {|
  __typename: 'GetFoodsResult',
  foods: Food[],
|};
