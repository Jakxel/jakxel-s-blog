import { parseFrontMatter } from "./frontMatter"

export type Post = {
  slug: string
  title: string
  excerpt?: string
  date?: string
  tags?: string[]
  content?: string
}

export async function loadAllPosts(): Promise<Post[]> {
  const res = await fetch("/posts/index.json")
  const files: string[] = await res.json()

  const posts = await Promise.all(
    files.map(async file => {
      const res = await fetch(`/posts/${file}`)
      const text = await res.text()
      const { data, content } = parseFrontMatter(text)

      return {
        slug: file.replace(".md", ""),
        content,
        ...(data as any)
      }
    })
  )

  return posts.sort(
    (a, b) =>
      new Date(b.date ?? "").getTime() -
      new Date(a.date ?? "").getTime()
  )
}