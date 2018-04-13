// @flow

import type { OAuth2Error } from './OAuth2Error';
import type { OAuth2Result } from './OAuth2Result';

export type AuthenticateData = {|
  __typename: 'AuthenticateData',
  errors?: ?OAuth2Error[],
  result?: ?OAuth2Result,
|};
