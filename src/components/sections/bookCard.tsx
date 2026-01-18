import { type Book } from "../../data/books"
import "../../styles/sections/bookCard.css"

export default function BookCard({ book }: { book: Book }) {

  return (
    <main className="bookcard__main">
      <div>
         <header className="bookcard__header">
          <h3>{book.title}</h3>
        </header>
      <section className="bookcard__section">

      </section>
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

          
        {book.link && (
          <p>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              Look book
            </a>
          </p>
        )}
      <img className="bookcard__img" src={book.cover} alt={`${book.title} cover`}/>
      </div>
    </main>
  )
}