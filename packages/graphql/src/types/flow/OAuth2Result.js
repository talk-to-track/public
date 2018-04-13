// @flow

import type { OAuth2TokenType } from './OAuth2TokenType';

export type OAuth2Result = {|
  __typename: 'OAuth2Result',
  access_token: string,
  expires_in: number,
  refresh_token: string,
  token_type: OAuth2TokenType,
|};
