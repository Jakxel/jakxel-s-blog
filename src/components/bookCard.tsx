import { useState } from "react"
import { type Book } from "../data/books"

export default function BookCard({ book }: { book: Book }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
    >
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {book.year && <p>{book.year}</p>}

      {book.description && <p>{book.description}</p>}

      {book.tags && (
        <div className="book-tags">
          {book.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
      )}

      {isHovered && book.cover && (
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          style={{ width: "120px", marginTop: "10px" }}
        />
      )}

      {book.link && (
        <p>
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            Look book
          </a>
        </p>
      )}
    </div>
  )
}