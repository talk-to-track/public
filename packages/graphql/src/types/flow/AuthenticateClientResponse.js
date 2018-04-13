// @flow

import type { AuthenticateData } from './AuthenticateData';
import type { GraphQLResponse } from './GraphQLResponse';

export type AuthenticateClientResponse = GraphQLResponse<{|
  authenticateClient: AuthenticateData,
|}>;
