// @flow

import type { GetFoodsError } from './GetFoodsError';
import type { GetFoodsResult } from './GetFoodsResult';

export type GetFoodsData = {|
  __typename: 'GetFoodsData',
  errors?: GetFoodsError[],
  result?: GetFoodsResult,
|};
