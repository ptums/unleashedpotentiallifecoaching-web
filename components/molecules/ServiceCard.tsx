import Button from 'components/atoms/Button'
import useModalHook from 'hooks/useModalHook'
import dynamic from 'next/dynamic'
import React from 'react'
import styled from 'styled-components'
import { Coach } from 'types/Coach'

const BookTimePopup = dynamic(() => import('components/molecules/BookTimePopup'))

const ServiceCard = ({ name, image }: Coach) => {
  const [beforeClose, afterOpen, toggleModal, isOpen, opacity] = useModalHook()
  const { src } = image

  return (
    <ServiceWrapper>
      <ProfileImage image={src} />
      <Container>
        <InnerWrapper>
          <BookTimeWrapper>
            <p>Online Coaching with {name}</p>
            <p>1 hour</p>
            <Button btnPadding="8px 16px" fontSize="lg" handleClick={toggleModal}>
              Book
            </Button>
          </BookTimeWrapper>
        </InnerWrapper>
      </Container>
      <BookTimePopup
        isOpen={isOpen}
        beforeClose={beforeClose}
        afterOpen={afterOpen}
        toggleModal={toggleModal}
        opacity={opacity}
      />
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
