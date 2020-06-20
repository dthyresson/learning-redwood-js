import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated } = useAuth()

  return (
    <>
      <Flash timeout={5000} />
      <header>
        <Link to={routes.home()}>Redwood Blog</Link>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <Link to={routes.cupcakes()}>Cupcakes</Link>
            </li>
            <li>
              <Link to={routes.secret()}>Secret</Link>
            </li>
            <li>
              <Link to={routes.posts()}>Manage Posts</Link>
            </li>
            <li>
              <a href="#" onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
