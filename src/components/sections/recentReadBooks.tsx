import BookCardSimple from "./bookCardSimple"
import "../../styles/sections/recentReadBooks.css"

interface Book {
  id: string
  title: string
  author: string
  cover?: string
  year?: number
}

type Props = {
  books: Book[]
  limit?: number
}

export default function RecentReadBooks({ books, limit = 3 }: Props) {
  const recentBooks = books.slice(0, limit)

  return (
    <main className="recentbook__main">
      <header className="recentbook__header">
        <h1>Recently read books</h1>
      </header>
      <section className="recentbook__header">
        <div>
        {recentBooks.map(book => (
          <BookCardSimple key={book.id} book={book} />
        ))}
      </div>
      </section>
    </main>
  )
}