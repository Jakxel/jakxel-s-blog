import { useState, useMemo } from "react"
import { books, type Book } from "../data/books"
import BookCard from "../components/sections/bookCard"
import "../../src/styles/pages/books.css"

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
    <main className="books__main">
      <header className="books__header">
        <h1>Books</h1>
      </header>
      <section className="booksfilter__section">
        {allTags.map(tag => (
          <button 
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? "active" : ""}
          >
            {tag === "all" ? "Todos" : `#${tag}`}
          </button>
        ))}
      </section>

      <section className="books__section">
        <h1>Read</h1>
        <article className="books__article">
          {filterBooksByTag(books.read).map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </article>
      </section>

      <section className="books__section">
        <h1>Reading</h1>
        <article className="books__article">
          {filterBooksByTag(books.reading).map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </article>
      </section>

      <section className="books__section">
        <h1>To Read</h1>
        <article className="books__article">
          {filterBooksByTag(books.toRead).map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </article>
      </section>
     
    </main>
  )
}