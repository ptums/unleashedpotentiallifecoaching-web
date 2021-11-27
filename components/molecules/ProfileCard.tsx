import Button from 'components/atoms/Button'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import handleBooking from 'utils/booking-time'

interface Props {
  name: string
  image: {
    src: string
    alt: string
    height: string | number
    width: string | number
  }
}
const ProfileCard: React.FC<Props> = ({ name, image }) => {
  return (
    <Container>
      <InnerWrapper>
        <Image {...image} layout="intrinsic" />
        <BookTimeWrapper>
          <p>Online Coaching with {name}</p>
          <p>1 hour</p>
          <Button btnPadding="8px 16px" fontSize="xxxxl" handleClick={handleBooking}>
            Book now
          </Button>
        </BookTimeWrapper>
      </InnerWrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.colors.extraLargeShadow};
  border-radius: 4px;
  max-width: 100%;
  padding: 8px;
  margin: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 720px;
    height: 248px;
    margin auto;
    margin-top: 64px;
  }
`

const InnerWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: flex-start;
    min-height: 244px;

    span {
      img {
        max-height: 244px !important;
      }
    }
  }
`

const BookTimeWrapper = styled.div`
  margin: auto;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;

  p:first-child {
    ${(props) => props.theme.fonts.xxxxl};
  }

  p:nth-child(2) {
    ${(props) => props.theme.fonts.xxxl};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-left: 72px;
  }
`
export default ProfileCard
