import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Coach } from 'types/Coach'
import {  urlify } from 'utils/helpers'

const CoachCard: React.FC<Coach> = ({ name, image }: Coach) => {
  const coachUrl = `/coach/${urlify(name)}`;
  return (
    <Card>
      <Link href={coachUrl}>
        <a>
        <ImageContainer>
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt={name}
          layout="intrinsic"
        />
      </ImageContainer>
      <Details>
        <Time>1 hour coaching with</Time>
        <Name>{name}</Name>
      </Details>
        </a>
      </Link>
    </Card>
  )
}

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 32px;
  margin-bottom: 32px;
  transition: all .2s;
  max-width: 420px;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    cursor:pointer;
    background-color: ${props => props.theme.colors.offWhite};
    box-shadow: ${props => props.theme.colors.extraLargeShadow};
  }
`

const ImageContainer = styled.div`
  span {
    img {
      border-radius: 8px;
      transition: all .2s;
      margin: auto !important;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
`

const Time = styled.p`
  ${(props) => props.theme.fonts.xxxxxl};
  font-weight: 700;
  margin-bottom: 0;
`

const Name = styled.p`
  ${(props) => props.theme.fonts.xxxxxl};
  color: ${(props) => props.theme.colors.darkGreen};
  margin-top: 0;
`

export default CoachCard
