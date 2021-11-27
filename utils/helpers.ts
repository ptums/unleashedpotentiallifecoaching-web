import { Review } from 'types/Review'

export const urlify = (str: string): string => str.replace(/\s+/g, '-').toLowerCase()

export const formatReview = (review): Review => {
  return review
    .filter((review) => review.node.featured === true)
    .map(({ node }) => ({
      featured: node.featured,
      name: node.name,
      quote: node.quote,
    }))[0]
}
