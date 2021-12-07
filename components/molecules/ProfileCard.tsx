import Button from 'components/atoms/Button'
import useModalHook from 'hooks/useModalHook'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const BookTimePopup = dynamic(() => import('components/molecules/BookTimePopup'))

interface Props {
  name: string
  image: {
    src: string
    alt: string
    height: string | number
    width: string | number
  }
}
const ProfileCard = ({ name, image }: Props) => {
  const [beforeClose, afterOpen, toggleModal, isOpen, opacity] = useModalHook()

  return (
    <Container>
      <InnerWrapper>
        <Image {...image} layout="intrinsic" />
        <BookTimeWrapper>
          <p>Online Coaching with {name}</p>
          <p>1 hour</p>
          <Button btnPadding="8px 16px" fontSize="lg" handleClick={toggleModal}>
            Book now
          </Button>
        </BookTimeWrapper>
      </InnerWrapper>
      <BookTimePopup
        isOpen={isOpen}
        beforeClose={beforeClose}
        afterOpen={afterOpen}
        toggleModal={toggleModal}
        opacity={opacity}
      />
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
    ${(props) => props.theme.fonts.lg};
  }

  p:nth-child(2) {
    ${(props) => props.theme.fonts.base};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-left: 72px;
  }
`
export default ProfileCard
