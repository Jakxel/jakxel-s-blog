import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { loadAllPosts, type Post } from "../../utils/loadPost"
import "../../styles/sections/recentPost.css"

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
    <main className="recentpost__main">
      <header className="recentpost__header">
        <h1>Recent posts</h1>
      </header>
      <section className="recentpost__section">
      

      {posts.map(post => (
        <article  className="recentpost__article" key={post.slug}>
          <h1 className="recentpost__h1">
            <Link  className="recentpost__link"to={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h1>

          {post.excerpt && <p className="recentpost__p">{post.excerpt}</p>}

          {post.tags && (
            <div className="recentpost__tags">
              {post.tags.map(tag => (
                <Link className="recentpost_linktags" key={tag} to={`/tags/${tag}`}>
                  #{tag}{" "}
                </Link>
              ))}
            </div>
          )}
        </article>
      ))}
      <Link className="recentpost__linktopost" to="/posts">Look at all the posts →</Link>
    </section>
    </main>
    
  )
}