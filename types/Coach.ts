import { Seo } from './SEO'

export interface Coach {
  id?: number
  seo?: Seo
  name: string
  image: {
    src: string
    width: string | number
    height: string | number
    alt?: string
  }
  welcomeMessage?: string[]
  biography?: string[]
}
