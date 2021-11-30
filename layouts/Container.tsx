import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <ContainerLayout>{children}</ContainerLayout>
}

const ContainerLayout = styled.div`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    max-width: 1200px;
  }
`

export default Container
