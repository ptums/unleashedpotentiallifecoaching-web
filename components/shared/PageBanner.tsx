import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
}
const PageBanner: React.FC<Props> = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

const Container = styled.div`
  background: url('/standard-background.webp') no-repeat center center fixed;
  background-size: cover;
  height: 540px;
  position: relative;
  top: -8px;
`

const Title = styled.h1`
  margin: auto;
  text-align: center;
  ${(props) => props.theme.fonts.xxxxxxl};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  font-style: italic;
  color: ${(props) => props.theme.colors.cream};
  text-shadow: ${(props) => props.theme.colors.shadowNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 425px;
`

export default PageBanner
