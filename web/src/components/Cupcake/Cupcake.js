import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/core'
import { Link as RouterLink, routes } from '@redwoodjs/router'

const CupcakeRating = ({ cupcake }) => {
  return [...Array(cupcake.rating)].map((_, i) => {
    return (
      <Icon key={`${cupcake.id}-${i}`} name="star" color="yellow.400" mr={1} />
    )
  })
}

const Cupcake = ({ cupcake }) => {
  return (
    <Box
      mb={6}
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      shadow="md"
      width={[
        '95%', // base
        '85%', // 480px upwards
        '75%', // 768px upwards
        '50%', // 992px upwards
      ]}
      key={cupcake.id}
    >
      <Box p={6}>
        <Heading as="h3" size="xl" mb={4}>
          <Link as={RouterLink} to={routes.cupcake({ id: cupcake.id })}>
            {cupcake.name}
          </Link>
        </Heading>
        <Text mb={4} fontSize={['sm', 'md', 'lg', 'xl']}>
          {cupcake.description}
        </Text>
        <Flex justify="center" p={6} direction="column" align="center">
          <Image
            src={cupcake.photos[0].file.url}
            alt={cupcake.name}
            size="50%"
            // maxH="240px"
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/120"
            rounded="lg"
            mb={2}
          />
          <Stack isInline mt={4}>
            <CupcakeRating cupcake={cupcake} />
          </Stack>
        </Flex>
      </Box>
    </Box>
  )
}

export default Cupcake
