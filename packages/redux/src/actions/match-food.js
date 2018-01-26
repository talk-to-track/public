// @flow

import type from '../constants/match-food';
import type { ServiceFood } from '../types/ServiceFood';

export default (payload: ServiceFood) => ({ type, payload });
