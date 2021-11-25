import ImageWrapper from 'components/atoms/ImageWrapper'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Coach } from 'types/Coach'
import { urlify } from 'utils/helpers'

const CoachCard: React.FC<Coach> = ({ name, image }: Coach) => {
  const coachUrl = `/coach/${urlify(name)}`
  return (
    <Card>
      <Link href={coachUrl}>
        <a>
          <ImageWrapper {...image} alt={name} />
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
  transition: all 0.2s;
  max-width: 420px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-bottom: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.offWhite};
    box-shadow: ${(props) => props.theme.colors.extraLargeShadow};
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
