import { Box, Heading, Image, Link, Text } from '@chakra-ui/core'
import { Link as RouterLink, routes } from '@redwoodjs/router'

const Cupcake = ({ cupcake }) => {
  return (
    <Box
      mb={6}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      shadow="md"
      key={cupcake.id}
    >
      <Box p="6">
        <Heading as="h3" size="lg" mb={4}>
          <Link as={RouterLink} to={routes.cupcake({ id: cupcake.id })}>
            {cupcake.name}
          </Link>
        </Heading>
        <Text mb={4}>{cupcake.description}</Text>
        <Image src={cupcake.photos[0].file.url} objectFit="cover" />
      </Box>
    </Box>
  )
}

export default Cupcake
