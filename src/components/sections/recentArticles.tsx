import { articles } from '../../data/articles'
import "../../styles/sections/cards.css"
import "../../styles/sections/recentArticles.css"

interface RecentArticlesProps {
    count?: number
}

export default function RecentArticles({ count = 3 }: RecentArticlesProps) {
    const sortedArticles = [...articles]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count)

    return (
        <main className="recentarticles__main">
            <header className='recentarticles__header'>
                <h1>Recent Articles</h1>
            </header>
        {sortedArticles.map(article => (
        <li className="card card--article" key={article.id}>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__meta">
            {new Date(article.date).toLocaleDateString()}
        </p>

        <p className="card__description">{article.description}</p>

        <div className="card__tags">
            {article.tags.map(tag => (
                <span key={tag}>#{tag}</span>
            ))}
        </div>
        <a href={`/articles/${article.id}`}>Look article</a>
    </li>
))}
            
            
        </main>
    )
}