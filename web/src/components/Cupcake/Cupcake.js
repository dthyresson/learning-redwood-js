import { Box, Image } from '@chakra-ui/core'
import { Link, routes } from '@redwoodjs/router'

const Cupcake = ({ cupcake }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      mb={6}
      key={cupcake.id}
    >
      <Box p="6">
        <h2>
          <Link to={routes.cupcake({ id: cupcake.id })}>{cupcake.name}</Link>
        </h2>
        <p>{cupcake.description}</p>
        <Image src={cupcake.photos[0].file.url} objectFit="cover" />
      </Box>
    </Box>
  )
}

export default Cupcake
