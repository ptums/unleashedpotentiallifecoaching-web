import Image from 'next/image'
import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  image: {
    src: string
    width: string | number
    height: string | number
    alt: string
  }
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}
const ProfileCard: React.FC<Props> = ({ name, image, handleClick }) => {
  return (
    <Container>
      <InnerWrapper>
        <Image {...image} layout="intrinsic" />
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
    max-width: 640px;
  }
`

const InnerWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.black};
  padding: 16px;
  border-radius: 4px;
`
export default ProfileCard
