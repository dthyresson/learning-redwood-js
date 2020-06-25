import { Text } from '@chakra-ui/core'
import BlogLayout from 'src/layouts/BlogLayout'
import WeatherCell from 'src/components/WeatherCell'
import { useAuth } from '@redwoodjs/auth'

const SecretPage = () => {
  const { currentUser } = useAuth()

  return (
    <BlogLayout>
      <Text>{currentUser.name}</Text>
      <Text>{currentUser.email}</Text>
      <Text>{currentUser.picture}</Text>
      <Text>This is a password protected page.</Text>
      <WeatherCell zip="02113" />
    </BlogLayout>
  )
}

export default SecretPage
