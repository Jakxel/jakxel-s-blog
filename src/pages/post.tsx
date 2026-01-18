import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { loadAllPosts, type Post } from "../utils/loadPost"
import { paginate } from "../utils/paginate"
import "../styles/pages/posts.css"

const PAGE_SIZE = 6

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [tags, setTags] = useState<string[]>([])

  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get("page") || 1)
  const search = searchParams.get("search") || ""
  const activeTag = searchParams.get("tag") || null

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])

  useEffect(() => {
    loadAllPosts().then(all => {
      setPosts(all)

      const allTags = Array.from(new Set(all.flatMap(post => post.tags ?? [])))
      setTags(allTags)
    })
  }, [])

  useEffect(() => {
    let filtered = [...posts]

    if (search) {
      const lower = search.toLowerCase()
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(lower) ||
          (post.excerpt?.toLowerCase().includes(lower) ?? false)
      )
    }

    if (activeTag) {
      filtered = filtered.filter(post => post.tags?.includes(activeTag))
    }

    setFilteredPosts(filtered)
  }, [posts, search, activeTag])

  const pagedPosts = paginate(filteredPosts, page, PAGE_SIZE)
  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE)

  const updateSearch = (value: string) => {
    const params: Record<string, string> = { ...Object.fromEntries(searchParams) }
    params.search = value
    params.page = "1" 
    setSearchParams(params)
  }

  const updateTag = (tag: string | null) => {
    const params: Record<string, string> = { ...Object.fromEntries(searchParams) }
    if (tag) params.tag = tag
    else delete params.tag
    params.page = "1"
    setSearchParams(params)
  }

  const goToPage = (p: number) => {
    const params: Record<string, string> = { ...Object.fromEntries(searchParams) }
    params.page = p.toString()
    setSearchParams(params)
  }

  return (
    <main className="post-main">
      <h1 className="post-h1">Post Section</h1>

      <input className="post-input"
        type="text"
        placeholder="Loading posts..."
        value={search}
        onChange={e => updateSearch(e.target.value)}
        style={{ marginBottom: 16, padding: 4, width: "100%" }}
      />

      <div style={{ marginBottom: 16 }}>
        <strong>Tag filter: </strong>
        <button
          onClick={() => updateTag(null)}
          style={{ marginRight: 8, backgroundColor: activeTag ? "#fff" : "#ddd" }}
        >
          All
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => updateTag(tag)}
            style={{
              marginRight: 8,
              backgroundColor: activeTag === tag ? "#ddd" : "#fff"
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {pagedPosts.length === 0 && <p>There are not posts that match.</p>}
      {pagedPosts.map(post => (
        <article className="post-article" key={post.slug} style={{ marginBottom: 24 }}>
          <h2>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          {post.excerpt && <p>{post.excerpt}</p>}
          {post.tags && (
            <div>
              {post.tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => updateTag(tag)}
                  style={{
                    marginRight: 4,
                    cursor: "pointer",
                    backgroundColor: "#eee",
                    border: "none",
                    padding: "2px 6px",
                    borderRadius: 4
                  }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
        </article>
      ))}

      {totalPages > 1 && (
        <nav style={{ marginTop: 16 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              style={{
                marginRight: 8,
                padding: "4px 8px",
                backgroundColor: page === i + 1 ? "#ccc" : "#fff",
                border: "1px solid #999",
                borderRadius: 4,
                cursor: "pointer"
              }}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      )}
    </main>
  )
}