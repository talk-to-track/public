// @flow

import type { ServiceMatch } from './ServiceMatch';

export type ServiceMatchResponse = {|
  text: string,
  matches: ServiceMatch[],
|};
