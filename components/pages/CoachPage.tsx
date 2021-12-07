import ProfileCard from 'components/molecules/ProfileCard'
import Biography from 'components/organisms/coach/Biography'
import ProfileHeader from 'components/organisms/coach/ProfileHeader'
import FooterReview from 'components/shared/FooterReview'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import FadeInContainer from 'layouts/FadeInContainer'
import PopModalContainer from 'layouts/PopModalContainer'
import React from 'react'
import styled from 'styled-components'
import { Coach } from 'types/Coach'
import { Review } from 'types/Review'

interface Props {
  coach: Coach
  featuredReview: Review
}
const CoachPage = ({ coach, featuredReview }: Props) => {
  const { name, image, welcomeMessage, biography, bookTimeImage, seo } = coach

  return (
    <PopModalContainer>
      <FadeInContainer>
        <SiteHead {...seo} />
        <main>
          <Container>
            <ProfileHeader name={name} image={image} welcomeMessage={welcomeMessage} />
            <Biography biography={biography} />
            <ProfileCard name={name} image={bookTimeImage} />
          </Container>
          <ReviewWrapper>
            <FooterReview {...featuredReview} />
          </ReviewWrapper>
        </main>
      </FadeInContainer>
    </PopModalContainer>
  )
}

const ReviewWrapper = styled.div`
  margin-top: 88px;
`
export default CoachPage
