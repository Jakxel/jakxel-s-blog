export function parseFrontMatter(markdown: string) {
  if (!markdown.startsWith('---')) {
    return { data: {}, content: markdown }
  }

  const end = markdown.indexOf('---', 3)
  if (end === -1) {
    return { data: {}, content: markdown }
  }

  const raw = markdown.slice(3, end).trim()
  const content = markdown.slice(end + 3).trim()

  const data: Record<string, string | string[]> = {}

  raw.split('\n').forEach(line => {
    const [key, ...rest] = line.split(':')
    const value = rest.join(':').trim()

    if (value.startsWith('[')) {
      data[key.trim()] = JSON.parse(value)
    } else {
      data[key.trim()] = value.replace(/^"|"$/g, '')
    }
  })

  return { data, content }
}