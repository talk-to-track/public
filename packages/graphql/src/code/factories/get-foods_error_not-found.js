// @flow

import GET_FOODS_ERROR_CODE_NOT_FOUND from '../constants/GET_FOODS_ERROR_CODE_NOT_FOUND';
import type { GetFoodsErrorNotFound } from '../../types/flow/GetFoodsErrorNotFound';

type Options = { foodId: string };

export default (opts: Options): GetFoodsErrorNotFound => ({
  __typename: 'GetFoodsErrorNotFound',
  code: GET_FOODS_ERROR_CODE_NOT_FOUND,
  message: `foodId “${opts.foodId}” not found`,
  data: {
    __typename: 'GetFoodsErrorNotFoundData',
    foodId: opts.foodId,
  },
});
