import BlogLayout from 'src/layouts/BlogLayout'
import CupcakeCell from 'src/components/CupcakeCell'

const CupcakePage = ({ id }) => {
  return (
    <BlogLayout>
      <CupcakeCell id={id} />
    </BlogLayout>
  )
}

export default CupcakePage
