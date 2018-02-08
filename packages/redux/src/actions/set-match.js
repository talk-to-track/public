// @flow

import type from '../constants/set-match';
import type { ServiceMatch } from '../types/ServiceMatch';

export default (payload: ServiceMatch) => ({ type, payload });
