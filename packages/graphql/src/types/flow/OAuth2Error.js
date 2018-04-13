// @flow

import type { OAuth2ErrorType } from './OAuth2ErrorType';

export type OAuth2Error = {|
  __typename: 'OAuth2Error',
  error: OAuth2ErrorType,
  error_description?: string,
  error_uri?: string,
|};
