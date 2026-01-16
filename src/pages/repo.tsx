import React, { useState, useEffect } from 'react';
import "../styles/pages/repo.css"

interface Repository {
    id: number;
    name: string;
    description: string | null;
    url: string;
    stars: number;
    language: string | null;
}

interface GitHubUserReposListProps {
    username: string;
}

export const GitHubUserReposList: React.FC<GitHubUserReposListProps> = ({ username }) => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch repositories for user: ${username}`);
                }

                const data = await response.json();
                const formattedRepos: Repository[] = data.map((repo: any) => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                }));

                setRepos(formattedRepos);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setRepos([]);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchRepos();
        }
    }, [username]);

    if (loading) return <div style={{padding: '1rem'}}>Loading repositories...</div>;
    if (error) return <div style={{padding: '1rem', color: 'red'}}>Error: {error}</div>;

    return (
        <div id="repo-conteiner" className='conteiner'>
            <div id="repo-title" className='title-conteiner'>
                <h1>My GitHub repos</h1>
            </div>
            
            <div id="repo-content" className='content-conteiner'>
                {repos.map((repo) => (
                    <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer">
                        <h2>{repo.name}</h2>
                        {repo.description && <p>{repo.description}</p>}
                    </a>
                ))}
            </div>
        </div>
    );
};