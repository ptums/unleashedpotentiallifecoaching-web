import React from 'react'
import styled from 'styled-components'

const BANNER_URL =
  'https://res.cloudinary.com/tumulty-web-services/image/upload/v1638888993/unleashedpotential/geoffroy-hauwen-hU_A4b397bQ-unsplash.webp'

interface Props {
  title: string
}

const PageBanner = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

const Container = styled.div`
  background: url(${BANNER_URL}) no-repeat center center;
  background-size: cover;
  position: relative;
  top: -8px;
`

const Title = styled.h1`
  margin: auto;
  text-align: center;
  ${(props) => props.theme.fonts.xxxxxxxxl};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  font-style: italic;
  color: ${(props) => props.theme.colors.white};
  text-shadow: ${(props) => props.theme.colors.shadowNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 425px;
`

export default PageBanner
