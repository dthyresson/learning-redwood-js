import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query {
    searchablePosts {
      id
      title
      body
      createdAt
      sound
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ searchablePosts }) => {
  return searchablePosts.map((searchablePost) => (
    <BlogPost key={searchablePost.id} post={searchablePost}></BlogPost>
  ))
}
