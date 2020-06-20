import { Box } from '@chakra-ui/core'
import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <Box key={post.id} bg="tomato" w={1 / 2} p={4} mb={4} color="white">
      <header>
        <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
      </header>
      <p>{post.body}</p>
      <p>sound: {post.sound}</p>
      <div>
        Posted at:<time> {post.createdAt}</time>
      </div>
    </Box>
  )
}

export default BlogPost
