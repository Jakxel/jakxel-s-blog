import React, { useState, useEffect } from 'react'
import "../styles/pages/repo.css"
import { paginate } from '../utils/paginate'

interface Repository {
  id: number
  name: string
  description: string | null
  url: string
}

interface GitHubUserReposListProps {
  username: string
}

export const GitHubUserReposList: React.FC<GitHubUserReposListProps> = ({ username }) => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 👉 paginación
  const [page, setPage] = useState(1)
  const pageSize = 6

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}/repos`)

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories for user: ${username}`)
        }

        const data = await response.json()

        const formattedRepos: Repository[] = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
        }))

        setRepos(formattedRepos)
        setPage(1) // reset al cambiar usuario
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setRepos([])
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchRepos()
    }
  }, [username])

  if (loading) return <div style={{ padding: '1rem' }}>Loading repositories...</div>
  if (error) return <div style={{ padding: '1rem', color: 'red' }}>Error: {error}</div>

  // 👉 datos paginados
  const totalPages = Math.ceil(repos.length / pageSize)
  const paginatedRepos = paginate(repos, page, pageSize)

  return (
    <div id="repo-conteiner" >
      <section>
        <div  className="repotitle-conteiner">
          <h1 className='repo-title'>My GitHub repos</h1>
        </div>

        <div id="repo-content" className="content-conteiner-repo">
          {paginatedRepos.map(repo => (
            <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer">
              <h2>{repo.name}</h2>
              {repo.description && <p>{repo.description}</p>}
            </a>
          ))}
        </div>

        <div className="pagination">
          <button
            onClick={() => setPage(p => p - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage(p => p + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  )
}