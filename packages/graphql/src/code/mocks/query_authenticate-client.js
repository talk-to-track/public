// @flow

import OAUTH2_ERROR_TYPE_INVALID_CLIENT from '../constants/OAUTH2_ERROR_TYPE_INVALID_CLIENT';
import OAUTH2_TOKEN_TYPE_BEARER from '../constants/OAUTH2_TOKEN_TYPE_BEARER';
import type { AuthenticateClientVariables } from '../../types/flow/AuthenticateClientVariables';
import type { AuthenticateData } from '../../types/flow/AuthenticateData';

export default (_: any, vars: AuthenticateClientVariables): AuthenticateData => {
  if (vars.clientId === 'CLIENT_ID' && vars.clientSecret === 'CLIENT_SECRET') {
    return {
      __typename: 'AuthenticateData',
      errors: null,
      result: {
        __typename: 'OAuth2Result',
        access_token: '0000-0000-0000-0000-0000',
        expires_in: 300000000,
        refresh_token: '',
        token_type: OAUTH2_TOKEN_TYPE_BEARER,
      },
    };
  }

  return {
    __typename: 'AuthenticateData',
    errors: [{
      __typename: 'OAuth2Error',
      error: OAUTH2_ERROR_TYPE_INVALID_CLIENT,
      error_description: 'ClientID not found',
      error_uri: '',
    }],
    result: null,
  };
};
