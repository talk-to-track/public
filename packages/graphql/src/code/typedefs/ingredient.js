// @flow

export default [`
  type Ingredient {
    foodId: ID!
    ingredients: [Ingredient]
    quantity: Int!
    unitId: ID!
  }
`];
