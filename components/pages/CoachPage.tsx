import ProfileCard from 'components/molecules/ProfileCard'
import Biography from 'components/organisms/coach/Biography'
import ProfileHeader from 'components/organisms/coach/ProfileHeader'
import FooterReview from 'components/shared/FooterReview'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import React from 'react'
import styled from 'styled-components'
import { Coach } from 'types/Coach'
import { Review } from 'types/Review'

interface Props {
  coach: Coach
  featuredReview: Review
}
const CoachPage: React.FC<Props> = ({ coach, featuredReview }: Props) => {
  const { name, image, welcomeMessage, biography, bookTimeImage, seo } = coach

  const handleBooking = (e) => {
    e.preventDefault()

    console.log('well get there!')
  }

  return (
    <>
      <SiteHead {...seo} />
      <main>
        <Container>
          <ProfileHeader
            handleClick={handleBooking}
            name={name}
            image={image}
            welcomeMessage={welcomeMessage}
          />
          <Biography biography={biography} />
          <ProfileCard name={name} image={bookTimeImage} handleClick={handleBooking} />
        </Container>
        <ReviewWrapper>
          <FooterReview {...featuredReview} />
        </ReviewWrapper>
      </main>
    </>
  )
}

const ReviewWrapper = styled.div`
  margin-top: 88px;
`
export default CoachPage
