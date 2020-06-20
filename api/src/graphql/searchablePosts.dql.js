import gql from 'graphql-tag'

export const schema = gql`
  type SearchablePost {
    id: Int!
    title: String!
    body: String!
    sound: String
    createdAt: DateTime!
  }

  type Query {
    searchablePosts: [SearchablePost!]!
  }
`
