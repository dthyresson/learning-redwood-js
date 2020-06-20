import BlogLayout from 'src/layouts/BlogLayout'
import WeatherCell from 'src/components/WeatherCell'

const SecretPage = () => {
  return (
    <BlogLayout>
      <p>This is a password protected page.</p>
      <WeatherCell zip="02113" />
    </BlogLayout>
  )
}

export default SecretPage
