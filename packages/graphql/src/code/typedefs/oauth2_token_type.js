// @flow

import bearer from '../constants/OAUTH2_TOKEN_TYPE_BEARER';

export default [`
  enum OAuth2TokenType {
    ${bearer}
  }
`];
