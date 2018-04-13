// @flow

import invalidClient from '../constants/OAUTH2_ERROR_TYPE_INVALID_CLIENT';
import invalidGrant from '../constants/OAUTH2_ERROR_TYPE_INVALID_GRANT';
import invalidRequest from '../constants/OAUTH2_ERROR_TYPE_INVALID_REQUEST';
import invalidScope from '../constants/OAUTH2_ERROR_TYPE_INVALID_SCOPE';
import unauthorizedClient from '../constants/OAUTH2_ERROR_TYPE_UNAUTHORIZED_CLIENT';
import unsupportedGrantType from '../constants/OAUTH2_ERROR_TYPE_UNSUPPORTED_GRANT_TYPE';

export default [`
  enum OAuth2ErrorType {
    ${invalidClient}
    ${invalidGrant}
    ${invalidRequest}
    ${invalidScope}
    ${unauthorizedClient}
    ${unsupportedGrantType}
  }
`];
