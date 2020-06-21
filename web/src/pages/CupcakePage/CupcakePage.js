import { Stack } from '@chakra-ui/core'
import BlogLayout from 'src/layouts/BlogLayout'
import CupcakeCell from 'src/components/CupcakeCell'

const CupcakePage = ({ id }) => {
  return (
    <BlogLayout>
      <Stack alignItems="center" spacing={8}>
        <CupcakeCell id={id} />
      </Stack>
    </BlogLayout>
  )
}

export default CupcakePage
