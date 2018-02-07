// @flow

import type from '../constants/entity-recognition-result';
import type { ServiceEntityRecognitionResult } from '../types/ServiceEntityRecognitionResult';

export default (payload: ServiceEntityRecognitionResult) => ({ type, payload });
