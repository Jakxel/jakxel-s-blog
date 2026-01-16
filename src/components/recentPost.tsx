import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { loadAllPosts, type Post } from "../utils/loadPost"

type Props = {
  limit?: number
}

export default function RecentPosts({ limit = 3 }: Props) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadAllPosts().then(all => {
      setPosts(all.slice(0, limit))
      setLoading(false)
    })
  }, [limit])

  if (loading) return <p>Loading recent posts...</p>

  return (
    <section>
      <h2>Recent posts</h2>

      {posts.map(post => (
        <article key={post.slug}>
          <h3>
            <Link to={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {post.excerpt && <p>{post.excerpt}</p>}

          {post.tags && (
            <div>
              {post.tags.map(tag => (
                <Link key={tag} to={`/tags/${tag}`}>
                  #{tag}{" "}
                </Link>
              ))}
            </div>
          )}
        </article>
      ))}

      <Link to="/posts">Look at all the posts →</Link>
    </section>
  )
}