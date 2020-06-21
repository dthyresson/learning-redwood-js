import { Box, Heading, Image, Link, Text } from '@chakra-ui/core'
import { Link as RouterLink, routes } from '@redwoodjs/router'

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
        <Image src={cupcake.photos[0].file.url} objectFit="cover" />
      </Box>
    </Box>
  )
}

export default Cupcake
