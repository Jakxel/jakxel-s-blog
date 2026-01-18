import { type Book } from "../../data/books"
import "../../styles/sections/bookCardSimple.css"

export default function BookCardSimple({ book }: { book: Book }) {
  return (
    <article className="card card--book">
      <h3 className="card__title">{book.title}</h3>

      <p className="card__meta">{book.year}</p>

      {book.description && (
        <p className="card__description">{book.description}</p>
      )}

      {book.tags && (
        <div className="card__tags">
          {book.tags.map(tag => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      )}

      {book.link && (
        <a href={book.link} target="_blank" rel="noopener noreferrer">
          Look book
        </a>
      )}
    </article>
  )
}