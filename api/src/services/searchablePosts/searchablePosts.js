import { db } from 'src/lib/db'

export const searchablePosts = () => {
  return db.queryRaw('SELECT * FROM searchable_post;')
}
