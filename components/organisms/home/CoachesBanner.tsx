import React from 'react'
import styled from 'styled-components'
import { Coach } from 'types/Coach'
import CoachCard from '~/components/molecules/CoachCard'

interface Props {
  coaches: Coach[]
}
const CoachesBanner: React.FC<Props> = ({ coaches }: Props) => {
  return (
    <Block>
      <Title>Take the first step</Title>
      <CoachesContainer>
        {coaches.map((coach) => <CoachCard key={coach.id} {...coach} />)}
      </CoachesContainer>
    </Block>
  )
}

const Block = styled.div`
  margin: 64px 0;
  padding: 8px 0;
  background-color: ${props => props.theme.colors.standardGreen};  
`

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
