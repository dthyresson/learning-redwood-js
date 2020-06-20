import gql from 'graphql-tag'

export const schema = gql`
  type Cupcake {
    id: String!
    name: String!
    description: String!
    price: Float
    rating: Int
    slug: String!
    photos: [ContentfulAsset]
  }

  type Query {
    cupcakes: [Cupcake!]!
    cupcake(id: String!): Cupcake!
  }
`
