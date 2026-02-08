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
  {
    id: '1',
    title: 'React StarKit',
    description: 'Learn the basics of React and start building components.',
    date: '2024-01-15',
    section: 'web',
    tags: ['React', 'Frontend'],
    slug: 'react-starkit',
    pdfLink: '/public/articles/React-startKit copy.pdf'
  },
  {
    id: '2',
    title: 'Computers Architecture',
    description: 'Introduction to computer architecture concepts.',
    date: '2024-02-10',
    section: 'CS Topics',
    tags: ['Hardware'],
    slug: 'computers-architecture',
    pdfLink: '/public/articles/Computer-Architecture copy.pdf'
  },
  {
    id: '3',
    title: 'Programming Paradigms',
    description: 'Overview of programming paradigms and their applications.',
    date: '2024-03-05',
    section: 'CS Topics',
    tags: ['Programming', 'Paradigms'],
    slug: 'programming-paradigms',
    pdfLink: '/public/articles/Programming-Paradigms.pdf'
  }
]
