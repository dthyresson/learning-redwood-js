import Cupcake from 'src/components/Cupcake'

export const QUERY = gql`
  query {
    cupcakes {
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
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ cupcakes }) => {
  return cupcakes.map((cupcake) => (
    <Cupcake key={cupcake.id} cupcake={cupcake}></Cupcake>
  ))
}
