// @flow

import type from '../constants/increment-diet-match-quantity-by';

export default (resultIndex: number, segmentIndex: number, count: number) => {
  const payload = { resultIndex, segmentIndex, count };
  return { type, payload };
};
