import {
  Box,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  Skeleton,
  Text,
} from '@chakra-ui/core'
export const QUERY = gql`
  query($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => {
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
        '25%', // 768px upwards
        '20%', // 992px upwards
      ]}
    >
      <Box p={6}>
        <Stat>
          <Skeleton mb={4}>
            <StatLabel>None</StatLabel>
          </Skeleton>
          <Box>
            <Skeleton mb={8}>
              <Text h={12}>None</Text>
            </Skeleton>
            <Skeleton mb={4}>
              <StatNumber>None</StatNumber>
            </Skeleton>
          </Box>
        </Stat>
      </Box>
    </Box>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <span
    style={{
      backgroundColor: '#ffdfdf',
      color: '#990000',
      padding: '0.5rem',
      display: 'inline-block',
    }}
  >
    {error.message.replace('GraphQL error: ', '')}
  </span>
)

export const Success = ({ weather }) => {
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
        '25%', // 768px upwards
        '20%', // 992px upwards
      ]}
    >
      <Box p={6}>
        <Stat>
          <StatLabel>{weather.city}</StatLabel>
          <Box>
            <Image src={weather.icon} />
            <StatNumber>
              {weather.temp}°F and {weather.conditions}
            </StatNumber>
          </Box>
        </Stat>
      </Box>
    </Box>
  )
}
