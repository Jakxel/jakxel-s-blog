import { useState, useMemo } from "react"
import { books, type Book } from "../data/books"
import BookCard from "../components/bookCard"

export default function BooksPage() {
  const [selectedTag, setSelectedTag] = useState<string>("all")

  const allTags = useMemo(() => {
    const tags = [
      ...books.read.flatMap(book => book.tags || []),
      ...books.reading.flatMap(book => book.tags || []),
      ...books.toRead.flatMap(book => book.tags || []),
    ]
    return ["all", ...Array.from(new Set(tags))]
  }, [])

  const filterBooksByTag = (bookList: Book[]) => {
    if (selectedTag === "all") return bookList
    return bookList.filter(book => book.tags?.includes(selectedTag))
  }

  return (
    <div id="books-container" className="container">
      <h1>Books</h1>

      {/* Filtrado por tags */}
      <div className="book-tag-filter">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? "active" : ""}
          >
            {tag === "all" ? "Todos" : `#${tag}`}
          </button>
        ))}
      </div>

      <section>
        <h2>Read</h2>
        <div id="book-info">
          {filterBooksByTag(books.read).map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h2>Reading</h2>
        <div id="book-info">
          {filterBooksByTag(books.reading).map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h2>To Read</h2>
        <div id="book-info">
          {filterBooksByTag(books.toRead).map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  )
}