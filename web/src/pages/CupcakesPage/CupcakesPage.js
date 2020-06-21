import { Box, Heading, Stack } from '@chakra-ui/core'
import BlogLayout from 'src/layouts/BlogLayout'
import CupcakesCell from 'src/components/CupcakesCell'

const CupcakesPage = () => {
  return (
    <BlogLayout>
      <Box>
        <Heading as="h2" size="xl">
          Cupcakes
        </Heading>
        <Stack alignItems="center" spacing={8}>
          <CupcakesCell />
        </Stack>
      </Box>
    </BlogLayout>
  )
}

export default CupcakesPage
