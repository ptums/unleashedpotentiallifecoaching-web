import FooterReview from 'components/shared/FooterReview'
import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import React from 'react'
import { Review } from 'types/Review'
import { Seo } from 'types/SEO'

interface Props {
  featuredReview: Review
  seo: Seo
  allReviews: Review[]
}

const ReviewsPage: React.FC<Props> = ({ featuredReview, seo, allReviews }: Props) => {
  const title = "Hear from Our Client's"
  return (
    <>
      <SiteHead {...seo} />
      <PageBanner title={title} />
      <Container>Reviews and contact form</Container>
      <FooterReview {...featuredReview} />
    </>
  )
}

export default ReviewsPage
