import { Box, Heading, Flex, Text, Button } from '@chakra-ui/core'
import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
)

const Header = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.500"
      color="white"
      mb={8}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Link to={routes.home()}>Redwood Blog</Link>
        </Heading>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <Link to={routes.about()}>About</Link>
        </MenuItems>
        <MenuItems>
          <Link to={routes.contact()}>Contact</Link>
        </MenuItems>
        <MenuItems>
          <Link to={routes.cupcakes()}>Cupcakes</Link>
        </MenuItems>
        <MenuItems>
          <Link to={routes.secret()}>Secret</Link>
        </MenuItems>
        <MenuItems>
          <Link to={routes.posts()}>Manage Posts</Link>
        </MenuItems>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          bg="transparent"
          border="1px"
          onClick={isAuthenticated ? logOut : logIn}
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </Button>
      </Box>
    </Flex>
  )
}

const BlogLayout = ({ children }) => {
  return (
    <>
      <Flash timeout={5000} />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
