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
        <Image {...image} width={300} height={400} layout="intrinsic" />
        <BookTimeWrapper>Online Coaching with {name}</BookTimeWrapper>
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

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: flex-start;
    max-height: 320px;
  }
`

const BookTimeWrapper = styled.div`
  margin: auto;
  ${(props) => props.theme.fonts.xxxxxl};
  text-align: center;
  font-weight: 900;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-left: 24px;
  }
`
export default ProfileCard
