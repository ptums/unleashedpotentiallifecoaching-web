import ReviewsPage from 'components/pages/ReviewsPage'
import { GetStaticProps } from 'next'
import React from 'react'
import { Review } from 'types/Review'
import { Seo } from 'types/SEO'
import { reviewsQuery } from 'utils/api'
import { formatReview } from 'utils/helpers'

interface Props {
  featuredReview: Review
  seo: Seo
  allReviews: Review[]
}
const Reviews: React.FC<Props> = ({ featuredReview, seo, allReviews }: Props) => {
  const pageProps = { featuredReview, seo, allReviews }
  return <ReviewsPage {...pageProps} />
}

export const getStaticProps: GetStaticProps = async () => {
  const reviews = await reviewsQuery()

  const featuredReview = formatReview(reviews)

  const allReviews = reviews.map(({ node }) => ({
    featured: node.featured,
    name: node.name,
    quote: node.quote,
  }))

  return {
    props: {
      seo: {
        title: 'Unleashed Potential: Life Coaching | Reviews',
        metaDescription:
          'We want to hear from you! Feel free to leave your thoughts about the coaches and experiences at Unleashed Potential: Life Coaching.',
      },
      allReviews,
      featuredReview,
    },
  }
}

export default Reviews
