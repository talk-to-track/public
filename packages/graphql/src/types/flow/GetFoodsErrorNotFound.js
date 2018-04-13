// @flow

import type { GetFoodsErrorNotFoundData } from './GetFoodsErrorNotFoundData';

export type GetFoodsErrorNotFound = {|
  __typename: 'GetFoodsErrorNotFound',
  code: 'NotFound',
  data: GetFoodsErrorNotFoundData,
  message: string,
|};
