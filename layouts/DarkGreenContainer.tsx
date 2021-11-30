import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const DarkGreenContainer = ({ children }: Props) => {
  return <ContainerLayout>{children}</ContainerLayout>
}

const ContainerLayout = styled.div`
  padding: 8px 0;
  background-color: ${(props) => props.theme.colors.standardGreen};
`

export default DarkGreenContainer
