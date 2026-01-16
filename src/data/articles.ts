export interface Article {
  id: string
  title: string
  description: string
  date: string
  section: string         
  tags: string[]        
  slug: string
  pdfLink?: string
}

export const articles: Article[] = [

    // examples articles "not real"
  {
    id: '1',
    title: 'Getting Started with React',
    description: 'Learn the basics of React and start building components.',
    date: '2024-01-15',
    section: 'mas reciente',
    tags: ['React', 'Frontend'],
    slug: 'getting-started-react',
    pdfLink: '/articles-pdf/getting-started-react.pdf'
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    description: 'Master TypeScript with these essential best practices.',
    date: '2024-01-10',
    section: 'cs topics',
    tags: ['TypeScript', 'JavaScript'],
    slug: 'typescript-best-practices',
    pdfLink: '/articles-pdf/typescript-best-practices.pdf'
  },
  {
    id: '3',
    title: 'React Hooks in Depth',
    description: 'A deep dive into React Hooks and their use cases.',
    date: '2024-02-05',
    section: 'mas reciente',
    tags: ['React', 'Hooks'],
    slug: 'react-hooks-in-depth',
    pdfLink: '/articles-pdf/react-hooks-in-depth.pdf'
  },
  {
    id: '4',
    title: 'Low Data Networking',
    description: 'Techniques for efficient network communication in low data environments.',
    date: '2024-03-12',
    section: 'low data',
    tags: ['Network', 'Optimization'],
    slug: 'low-data-networking',
    pdfLink: '/articles-pdf/low-data-networking.pdf'
  },
  {
    id: '5',
    title: 'Personal Productivity Tips',
    description: 'Improve your daily productivity with simple habits.',
    date: '2024-03-20',
    section: 'personal',
    tags: ['Productivity', 'Personal Development'],
    slug: 'personal-productivity-tips',
    pdfLink: '/articles-pdf/personal-productivity-tips.pdf'
  }
]