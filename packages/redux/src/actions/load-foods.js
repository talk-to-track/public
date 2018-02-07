// @flow

import type from '../constants/load-foods';
import type { ServiceFood } from '../types/ServiceFood';

export default (payload: ServiceFood) => ({ type, payload });
