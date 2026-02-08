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
  read: [
    {
      id: "1",
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      cover: "src/assets/img/books/BS13550-OREILLY-Clean-Code-Cookbook-836545324.jpeg",
      description: "A handbook of agile software craftsmanship, focusing on writing readable, maintainable, and efficient code.",
      link: "https://www.oreilly.com/library/view/clean-code/9780136083238/",
      tags: ["Programming",]
    },
  ],
  reading: [
    {
      id: "2",
      title: "Learning Systems Thinking",
      author: "Diana Montalion",
      year: 2022,
      cover: "src/assets/img/books/LST.jpeg",
      description: "An introduction to systems thinking for software engineers, exploring holistic approaches to solving complex problems.",
      link: "https://www.oreilly.com/library/view/learning-systems-thinking/9781098134170/",
      tags: ["Productivity","Systems Thinking"]
    },
    {
      id: "3",
      title: "The Staff Software Engineer Path",
      author: "Diana Montalion",
      year: 2023,
      cover: "src/assets/img/books/TSEP.jpeg",
      description: "A guide for software engineers aspiring to staff roles, covering leadership, architecture, and technical strategy.",
      link: "https://www.oreilly.com/library/view/the-staff-software/9781098134170/",
      tags: ["Leadership", "Programming"]
    }
  ],
  toRead: [
    {
      id: "4",
      title: "The Software Architecture Elevator",
      author: "Gregor Hohpe",
      year: 2020,
      cover: "src/assets/img/books/TSAE.jpeg",
      description: "Insights into software architecture, bridging the gap between technical and business perspectives.",
      link: "https://www.oreilly.com/library/view/the-software-architecture/9781492043454/",
      tags: ["Architecture", "Systems Thinking"]
    },
    {
      id: "5",
      title: "Learning Git",
      author: "Mikael Krief",
      year: 2021,
      cover: "src/assets/img/books/LG.jpeg",
      description: "A practical guide to mastering Git for version control, covering workflows, branching, and collaboration.",
      link: "https://www.oreilly.com/library/view/learning-git/9781801075733/",
      tags: ["Productivity"]
    },
  ]
}
