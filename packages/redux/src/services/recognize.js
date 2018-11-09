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
                ... on CardioWorkoutSetsMatch {
                  __typename
                  setMatch {
                    distanceMatch {
                      distance {
                        magnitude
                        unit
                      }
                    }
                    durationMatch {
                      duration {
                        magnitude
                        unit
                      }
                    }
                    exerciseMatch {
                      exercise {
                        id
                        name
                      }
                    }
                  }
                }
                ... on FoodServingMatch {
                  __typename
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
                ... on StrengthWorkoutSetsMatch {
                  __typename
                  setMatch {
                    exerciseMatch {
                      exercise {
                        id
                        name
                      }
                    }
                    repetitionMatch {
                      repetition
                    }
                    weightMatch {
                      weight {
                        magnitude
                        unit
                      }
                    }
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

          if (match.__typename === 'CardioWorkoutSetsMatch') {
            textMatch = '';
            const { setMatch } = match;
            const { exercise } = setMatch.exerciseMatch;
            const { distance } = setMatch.distanceMatch;
            const { duration } = setMatch.durationMatch;
            if (distance) textMatch += `${distance.magnitude} ${distance.unit}, `;
            if (duration) textMatch += `${duration.magnitude} ${duration.unit}, `;
            textMatch += exercise.name;
          } else if (match.__typename === 'FoodServingMatch') {
            const { food } = match.foodMatch;
            const { quantity } = match.quantityMatch;
            const { unit } = match.unitMatch;
            textMatch = `${quantity.magnitude} ${unit}, ${food.name}`;
          } else if (match.__typename === 'StrengthWorkoutSetsMatch') {
            textMatch = '';
            const { setMatch } = match;
            const { exercise } = setMatch.exerciseMatch;
            const { repetition } = setMatch.repetitionMatch;
            const { weight } = setMatch.weightMatch;
            if (repetition) textMatch += `${repetition} REP, `;
            if (weight) textMatch += `${weight.magnitude} ${weight.unit}, `;
            textMatch += exercise.name;
          }
        }
      }

      cb(null, {
        entities: {},
        text: textMatch,
        translations: [],
      });
    })
);
