import DOMPurify from 'isomorphic-dompurify'

type Props = {
  content: string
  typeText?: string
}

export function RichTextViewer({ content, typeText }: Props) {
  const __html = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['strong', 'b', 'a', 'p', 'em'],
  })

  switch (typeText) {
    case 'h1':
      return <h1 dangerouslySetInnerHTML={{ __html }} />
    case 'h2':
      return <h2 dangerouslySetInnerHTML={{ __html }} />
    case 'h3':
      return <h3 dangerouslySetInnerHTML={{ __html }} />
    default:
      return <h3 dangerouslySetInnerHTML={{ __html }} />
  }
}
