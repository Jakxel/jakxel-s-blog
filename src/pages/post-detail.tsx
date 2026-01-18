import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { parseFrontMatter } from "../utils/frontMatter"
import "../styles/pages/postDetail.css"

export default function PostDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        const parsed = parseFrontMatter(text)
        setPost(parsed)
      })
  }, [slug])

  if (!post) return <p>Loading...</p>

  return (
    <article className="post__article">
      <h1 className="post__h1">{post.data.title}</h1>
      <time className="post__time">{post.data.date}</time>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  )
}