// @flow

import type from '../constants/set-diet-match';
import type { ServiceMatchDiet } from '../types/ServiceMatchDiet';

export default (payload: ServiceMatchDiet) => ({ type, payload });
