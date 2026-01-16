export interface Book {
  id: string
  title: string
  author: string
  year?: number
  cover?: string
  description?: string
  link?: string
  tags?: string[]
}

export type BookStatus = "read" | "reading" | "toRead"

export const books: Record<BookStatus, Book[]> = {
    // books examples "not real"
  read: [
    {
      id: "1",
      title: "Learning Systems Thinking",
      author: "Diana Montalion",
      year: 2008,
      cover: "/assets/img/books/400w-4248732087.jpeg",
      description: "description ....",
      link: "https://www.example.com/learning-systems-thinking",
      tags: ["Systems Thinking", "Productivity"]
    },
    {
      id: "2",
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      cover: "/assets/img/books/clean-code.jpg",
      description: "description...",
      link: "https://www.example.com/clean-code",
      tags: ["Programming", "Best Practices"]
    },
    {
      id: "3",
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      year: 1999,
      cover: "/assets/img/books/pragmatic-programmer.jpg",
      description: "description ...",
      link: "https://www.example.com/pragmatic-programmer",
      tags: ["Programming", "Career"]
    }
  ],
  reading: [
    {
      id: "4",
      title: "Deep Work",
      author: "Cal Newport",
      year: 2016,
      cover: "/assets/img/books/deep-work.jpg",
      description: "description.",
      link: "https://www.example.com/deep-work",
      tags: ["Productivity", "Focus"]
    }
  ],
  toRead: [
    {
      id: "5",
      title: "Refactoring",
      author: "Martin Fowler",
      year: 1999,
      cover: "/assets/img/books/refactoring.jpg",
      description: "description",
      link: "https://www.example.com/refactoring",
      tags: ["Programming", "Design"]
    }
  ]
}