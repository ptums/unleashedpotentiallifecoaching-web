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
  height: 400px;
  position: relative;
  top: -8px;
`

const Title = styled.p`
  margin: auto;
  text-align: center;
  ${(props) => props.theme.fonts.xxxxxxxxxl};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  font-style: italic;
  color: ${(props) => props.theme.colors.cream};
  text-shadow: ${(props) => props.theme.colors.shadowNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 320px;
`

export default PageBanner
