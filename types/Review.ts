import { RichTextBlock } from 'prismic-reactjs'

export interface Review {
  featured?: boolean | null
  name: RichTextBlock[]
  quote: RichTextBlock[]
}
