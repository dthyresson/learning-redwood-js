import { Box, Skeleton, Stack } from '@chakra-ui/core'
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

export const Loading = () => {
  return (
    <Stack>
      <Box mb={6} maxW="sm" overflow="hidden">
        <Box p="6">
          <Skeleton height="20px" my="10px" />
        </Box>
      </Box>
      <Box mb={6} maxW="sm" overflow="hidden">
        <Box p="6">
          <Skeleton height="20px" my="10px" />
        </Box>
      </Box>
      <Box mb={6} maxW="sm" overflow="hidden">
        <Box p="6">
          <Skeleton height="20px" my="10px" />
        </Box>
      </Box>
    </Stack>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ cupcakes }) => {
  return cupcakes.map((cupcake) => (
    <Cupcake key={cupcake.id} cupcake={cupcake}></Cupcake>
  ))
}
