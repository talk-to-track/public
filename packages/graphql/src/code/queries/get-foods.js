// @flow

import gql from 'graphql-tag';

export default gql`
  query GetFoods($authToken: ID!, $foodIds: [ID!]!) {
    getFoods(authToken: $authToken, foodIds: $foodIds) {
      errors {
        ... on GetFoodsErrorNotFound {
          code
          message
          data { foodId }
        }
      }
      result {
        foods {
          id
          ingredients {
            foodId
            quantity
            unitId
          }
          name
          calories
          nutrients {
            calcium
            carbs
            cholesterol
            fat
            fiber
            iron
            protein
            satFat
            sodium
            sugars
            transFat
            vitA
            vitC
          }
        }
      }
    }
  }
`;
