// @flow

import type { GetFoodsData } from './GetFoodsData';
import type { GraphQLResponse } from './GraphQLResponse';

export type GetFoodsResponse = GraphQLResponse<{|
  getFoods: GetFoodsData,
|}>;
