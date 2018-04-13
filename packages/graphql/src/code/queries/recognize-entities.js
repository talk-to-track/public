// @flow

import gql from 'graphql-tag';

export default gql`
  query RecognizeEntities($authToken: ID!, $text: String!) {
    recognizeEntities(authToken: $authToken, text: $text) {
      result {
        entities {
          foods {
            id
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
        translations {
          segments {
            ... on TranslationSegmentDiet {
              type
              ingredient {
                foodId
                ingredients {
                  foodId
                  quantity
                  unitId
                }
                quantity
                unitId
              }
            }
          }
        }
      }
    }
  }
`;
