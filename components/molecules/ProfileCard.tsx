import Button from 'components/atoms/Button'
import Image from 'next/image'
import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  image: {
    src: string
  }
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}
const ProfileCard: React.FC<Props> = ({ name, image, handleClick }) => {
  return (
    <Container>
      <InnerWrapper>
        <Image {...image} layout="intrinsic" />
        <BookTimeWrapper>
          <p>Online Coaching with {name}</p>
          <p>1 hour</p>
          <Button btnPadding="8px 16px" fontSize="xxxxl" handleClick={handleClick}>
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
    max-height: 320px;
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
    max-height: 320px;

    span {
      img {
        max-width: 240px !important;
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
    margin-left: 24px;
  }
`
export default ProfileCard
