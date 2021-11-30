import ReviewBlock from 'components/organisms/reviews/ReviewBlock'
import ReviewForm from 'components/organisms/reviews/ReviewForm'
import FooterReview from 'components/shared/FooterReview'
import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import React from 'react'
import styled from 'styled-components'
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
      <Container>
        <PageWrapper>
          <ReviewWrapper>
            {allReviews.map((review) => (
              <ReviewBlock {...review} key={review.name[0].text} />
            ))}
          </ReviewWrapper>
          <ReviewForm />
        </PageWrapper>
      </Container>
      <FooterReview {...featuredReview} />
    </>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ReviewWrapper = styled.div`
  margin-top: 16px;
`
export default ReviewsPage
