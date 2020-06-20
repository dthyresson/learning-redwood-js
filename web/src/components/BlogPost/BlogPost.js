import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <article key={post.id}>
      <header>
        <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
      </header>
      <p>{post.body}</p>
      <p>sound: {post.sound}</p>
      <div>
        Posted at:<time> {post.createdAt}</time>
      </div>
    </article>
  )
}

export default BlogPost
