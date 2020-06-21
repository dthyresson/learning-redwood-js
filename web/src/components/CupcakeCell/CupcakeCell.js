import { Box, Skeleton } from '@chakra-ui/core'
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

export const Loading = () => {
  return (
    <Box mb={6} maxW="sm" overflow="hidden">
      <Box p="6">
        <Skeleton height="200px" my="10px" />
      </Box>
    </Box>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ cupcake }) => {
  return <Cupcake key={cupcake.id} cupcake={cupcake}></Cupcake>
}
