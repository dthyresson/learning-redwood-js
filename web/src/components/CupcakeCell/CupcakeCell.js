import Cupcake from 'src/components/Cupcake'

export const QUERY = gql`
  query($id: String!) {
    cupcake(id: $id) {
      id
      name
      description
      price
      rating
      slug
      photos {
        title
        file {
          url
          fileName
          contentType
          details {
            size
            image {
              width
              height
            }
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ cupcake }) => {
  return <Cupcake key={cupcake.id} cupcake={cupcake}></Cupcake>
}
