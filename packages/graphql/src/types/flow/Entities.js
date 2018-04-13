// @flow

import type { Food } from './Food';

export type Entities = {|
  __typename: 'Entities',
  foods?: ?Food[],
|};
