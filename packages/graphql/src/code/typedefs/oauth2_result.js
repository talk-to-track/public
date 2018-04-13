// @flow

import OAuth2TokenType from './oauth2_token_type';

const OAuth2Result = `
  type OAuth2Result {
    access_token: ID
    expires_in: Int
    refresh_token: ID
    token_type: OAuth2TokenType
  }
`;

export default [
  OAuth2Result,
  ...OAuth2TokenType,
];
