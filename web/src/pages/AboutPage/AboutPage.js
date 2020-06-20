import BlogLayout from 'src/layouts/BlogLayout'
import WeatherCell from 'src/components/WeatherCell'

const AboutPage = () => {
  return (
    <BlogLayout>
      <p>
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
      <WeatherCell zip="90210" />
    </BlogLayout>
  )
}

export default AboutPage
