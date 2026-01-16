import BookCard from "./bookCard"

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
    <section>
      <h2>Recently read books</h2>

      <div>
        {recentBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}