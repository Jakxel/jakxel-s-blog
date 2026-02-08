import { useState, useMemo } from 'react'
import { articles as allArticles } from '../data/articles'
import { paginate } from '../utils/paginate'
import "../styles/pages/articles.css"

const PAGE_SIZE = 6

export default function Articles() {
  const [selectedSection, setSelectedSection] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const sections = ['all', ...Array.from(new Set(allArticles.map(a => a.section)))]
  const tags = ['all', ...Array.from(new Set(allArticles.flatMap(a => a.tags)))]

  const filteredArticles = useMemo(() => {
    return allArticles.filter(article => {
      const sectionMatch = selectedSection === 'all' || article.section === selectedSection
      const tagMatch = selectedTag === 'all' || article.tags.includes(selectedTag)
      return sectionMatch && tagMatch
    })
  }, [selectedSection, selectedTag])

  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE)
  const pagedArticles = paginate(filteredArticles, currentPage, PAGE_SIZE)

  const handleSectionChange = (section: string) => {
    setSelectedSection(section)
    setCurrentPage(1)
  }

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag)
    setCurrentPage(1)
  }

  return (
    <div className="articles-catalog">
      <h1>Articles</h1>

      <div className="filters">
       
        <div className="section-filter"> <p>Section filter:</p>
          {sections.map(section => (
            <button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={selectedSection === section ? 'active' : ''}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="tag-filter">
          <p>Tags filter:</p>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={selectedTag === tag ? 'active' : ''}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="articles-grid">
        {pagedArticles.map(article => (
          <article key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p className="date">{new Date(article.date).toLocaleDateString()}</p>
            <p className="description">{article.description}</p>
            <span className="section">{article.section}</span>
            <div className="tags">
              {article.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
            {article.pdfLink && (
              <a href={article.pdfLink} target="_blank" rel="noopener noreferrer">
                View PDF →
              </a>
            )}
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="pagination">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}