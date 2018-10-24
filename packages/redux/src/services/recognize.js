// @flow

import type { ServiceEntityRecognitionResponse } from '../types/ServiceEntityRecognitionResponse';

type Callback = (err: ?Error, res: ?ServiceEntityRecognitionResponse) => void;

const graphqlRequest = (text: string) => (
  fetch('https://development-api.talktotrack.com/v/1/customer', {
    body: JSON.stringify({
      query: `{
        recognize(authAccessToken: "k3yb04rd_cat", text: "${text}") {
          result {
            alternatives {
              matches {
                ... on FoodServingMatch {
                  foodMatch {
                    food {
                      name
                    }
                  }
                  quantityMatch {
                    quantity {
                      magnitude
                    }
                  }
                  unitMatch {
                    unit
                  }
                }
              }
            }
          }
        }
      }`,
    }),
    method: 'POST',
    mode: 'cors',
  }).then(res => res.json())
);

export default (opts: any, text: string, cb: Callback) => (
  graphqlRequest(text)
    .catch(err => cb(err))
    .then((res: any) => {
      let textMatch = text;
      const { result } = res.data.recognize;

      if (result) {
        const alternative = result.alternatives[0];

        if (alternative) {
          const match = alternative.matches[0];
          const foodName = match.foodMatch.food.name;
          const quantity = match.quantityMatch.quantity.magnitude;
          const { unit } = match.unitMatch;
          textMatch = `${quantity}, ${unit}, ${foodName}`;
        }
      }

      cb(null, {
        entities: {},
        text: textMatch,
        translations: [],
      });
    })
);
