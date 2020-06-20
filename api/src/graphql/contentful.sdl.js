import gql from 'graphql-tag'

export const schema = gql`
  type ContentfulDimensions {
    width: Int
    height: Int
  }

  type ContentfulFileDetails {
    size: Int!
    image: ContentfulDimensions
  }

  type ContentfulFile {
    url: String!
    fileName: String!
    contentType: String!
    details: ContentfulFileDetails
  }

  type ContentfulAsset {
    title: String!
    file: ContentfulFile
  }
`
