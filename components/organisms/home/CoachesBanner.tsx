import React from 'react'
import styled from 'styled-components'
import { Coach } from 'types/Coach'
import CoachCard from 'components/molecules/CoachCard'
import DarkGreenContainer from 'layouts/DarkGreenContainer'

interface Props {
  coaches: Coach[]
}
const CoachesBanner: React.FC<Props> = ({ coaches }: Props) => {
  return (
    <DarkGreenContainer>
      <Title>Take the first step</Title>
      <CoachesContainer>
        {coaches.map((coach) => <CoachCard key={coach.id} {...coach} />)}
      </CoachesContainer>
    </DarkGreenContainer>
  )
}

const Title = styled.p`
  ${props => props.theme.fonts.xxxxxxxxl};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.playFairDisplay};
  font-style: italic;
  text-align: center;
`

const CoachesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media(min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 80px 128px;
    flex-direction: row;
    justify-content: space-evently;
  }
`



export default CoachesBanner
