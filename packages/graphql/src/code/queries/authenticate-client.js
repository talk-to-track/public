// @flow

import gql from 'graphql-tag';

export default gql`
  query AuthenticateClient($clientId: ID!, $clientSecret: ID!) {
    authenticateClient(clientId: $clientId, clientSecret: $clientSecret) {
      errors {
        error
        error_description
        error_uri
      }
      result {
        access_token
        expires_in
        refresh_token
        token_type
      }
    }
  }
`;
