// @flow

import OAuth2ErrorType from './oauth2_error_type';

const OAuth2Error = `
  type OAuth2Error {
    error: OAuth2ErrorType!
    error_description: String
    error_uri: String
  }
`;

export default [
  OAuth2Error,
  ...OAuth2ErrorType,
];
