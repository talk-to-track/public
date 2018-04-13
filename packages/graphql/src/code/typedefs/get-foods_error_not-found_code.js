// @flow

import notFound from '../constants/GET_FOODS_ERROR_CODE_NOT_FOUND';

export default [`
  enum GetFoodsErrorNotFoundCode {
    ${notFound}
  }
`];
