// @flow

import AuthenticateData from './authenticate_data';
import GetFoodsData from './get-foods_data';
import RecognizeEntitiesData from './recognize-entities_data';

const Query = `
  type Query {
    authenticateClient(clientId: ID!, clientSecret: ID!): AuthenticateData
    getFoods(authToken: ID!, foodIds: [ID!]!): GetFoodsData
    recognizeEntities(authToken: ID!, text: String!): RecognizeEntitiesData
  }
`;

export default [
  ...AuthenticateData,
  ...GetFoodsData,
  ...RecognizeEntitiesData,
  Query,
];
