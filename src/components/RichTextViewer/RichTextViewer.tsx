import DOMPurify from 'isomorphic-dompurify'

type RichTextViewerProps = {
  content: string
  typeText?: string
}

export function RichTextViewer({ content, typeText }: RichTextViewerProps) {
  const __html = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['strong', 'b', 'u', 'a', 'p', 'em'],
  })

  switch (typeText) {
    case 'h1':
      return (
        <h1 className="text-justify" dangerouslySetInnerHTML={{ __html }} />
      )
    case 'h2':
      return (
        <h2 className="text-justify" dangerouslySetInnerHTML={{ __html }} />
      )
    case 'h3':
      return (
        <h3 className="text-justify" dangerouslySetInnerHTML={{ __html }} />
      )
    default:
      return <h3 dangerouslySetInnerHTML={{ __html }} />
  }
}
