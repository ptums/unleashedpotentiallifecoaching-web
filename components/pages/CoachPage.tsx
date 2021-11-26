import ProfileCard from 'components/molecules/ProfileCard'
import Biography from 'components/organisms/coach/Biography'
import ProfileHeader from 'components/organisms/coach/ProfileHeader'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import React from 'react'
import { Coach } from 'types/Coach'

const CoachPage: React.FC<Coach> = ({
  seo,
  name,
  image,
  bookTimeImage,
  welcomeMessage,
  biography,
}: Coach) => {
  const handleBooking = (e) => {
    e.preventDefault()

    console.log('well get there!')
  }

  return (
    <>
      <SiteHead {...seo} />
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
    </>
  )
}

export default CoachPage
