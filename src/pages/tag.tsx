import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { loadAllPosts } from "../utils/loadPost"


export default function TagPage() {
  const { tag } = useParams()
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    loadAllPosts().then(all =>
      setPosts(all.filter(p => p.tags?.includes(tag!)))
    )
  }, [tag])

  return (
    <main>
      <h1>Tag: {tag}</h1>

      {posts.map(post => (
        <article key={post.slug}>
          <h2>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  )
}