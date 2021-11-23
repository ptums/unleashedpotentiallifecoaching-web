import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }: Props) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

const MainContainer = styled.main`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    max-width: 1200px;    
  }
`

export default Main