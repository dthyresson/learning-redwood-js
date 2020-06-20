import BlogLayout from 'src/layouts/BlogLayout'
import CupcakesCell from 'src/components/CupcakesCell'

const CupcakesPage = () => {
  return (
    <BlogLayout>
      <div>
        <h1>Cupcakes</h1>
        <CupcakesCell></CupcakesCell>
      </div>
    </BlogLayout>
  )
}

export default CupcakesPage
