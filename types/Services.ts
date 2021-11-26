import { RichTextBlock } from 'prismic-reactjs'

import { Seo } from './SEO'

export interface TServices {
  page_blocks: {
    content: RichTextBlock[]
    title: RichTextBlock[]
  }[]
  seo: Seo
}
