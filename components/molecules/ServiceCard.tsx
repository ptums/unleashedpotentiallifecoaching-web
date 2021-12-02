import React from 'react'
import { PopupButton } from 'react-calendly'
import styled from 'styled-components'
import { Coach } from 'types/Coach'

const ServiceCard = ({ name, image, calendarUrl }: Coach) => {
  const { src } = image

  return (
    <ServiceWrapper>
      <ProfileImage image={src} />
      <Container>
        <InnerWrapper>
          <BookTimeWrapper>
            <p>Online Coaching with {name}</p>
            fdsafd {calendarUrl}
            <p>1 hour</p>
            <PopupButton
              styles={{
                padding: '8px 16px',
                fontSize: '2.25rem',
                lineHeight: '2.5rem',
                borderRadius: '8px',
                outline: 0,
                border: 0,
                backgroundColor: '#31464B',
                color: '#FFF',
              }}
              text="Book now"
              url={calendarUrl}
            />
          </BookTimeWrapper>
        </InnerWrapper>
      </Container>
    </ServiceWrapper>
  )
}

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  margin-bottom: 88px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
  }
`
interface ImageProps {
  image: string
}
const ProfileImage = styled.div<ImageProps>`
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 400px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 500px;
    height: 400px;
  }
`
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.colors.extraLargeShadow};
  border-radius: 4px;
  padding: 8px;
  height: 224px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 242px;
    position: relative;
    right: 4em;
    top: 8em;
    bottom: 8em;
  }
`

const InnerWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 220px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: flex-start;
    height: 240px;
    width: 410px;
  }
`

const BookTimeWrapper = styled.div`
  margin: auto;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.standardGreen};

  p:first-child {
    ${(props) => props.theme.fonts.lg};
  }

  p:nth-child(2) {
    ${(props) => props.theme.fonts.base};
  }
`
export default ServiceCard
