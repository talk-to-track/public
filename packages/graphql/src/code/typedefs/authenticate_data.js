// @flow

import OAuth2Error from './oauth2_error';
import OAuth2Result from './oauth2_result';

const AuthenticateData = `
  type AuthenticateData {
    errors: [OAuth2Error]
    result: OAuth2Result
  }
`;

export default [
  AuthenticateData,
  ...OAuth2Error,
  ...OAuth2Result,
];
