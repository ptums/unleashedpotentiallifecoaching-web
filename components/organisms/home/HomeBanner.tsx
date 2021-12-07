import React from 'react'
import styled from 'styled-components'
import { Banner } from 'types/Home'

const HomeBanner = ({ imageUrl, lineOne, lineTwo }: Banner) => {
  return (
    <BannerContainer image={imageUrl}>
      <BannerText>
        <h1>{lineOne}</h1>
        <h2>{lineTwo}</h2>
      </BannerText>
    </BannerContainer>
  )
}

interface BannerContainerProps {
  image: string
}
const BannerContainer = styled.div<BannerContainerProps>`
  background: url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
`

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  text-align: center;
  min-height: 640px;

  h1 {
    ${(props) => props.theme.fonts.xxxxxxl};
    margin: 0;
    padding: 0;
    text-shadow: ${(props) => props.theme.colors.shadowNormal};
    color: ${(props) => props.theme.colors.cream};
    font-weight: 700;
  }

  h2 {
    ${(props) => props.theme.fonts.xxxxxxxl};
    color: ${(props) => props.theme.colors.white};
    text-shadow: ${(props) => props.theme.colors.shadowNormal};
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.playFairDisplay};
    font-style: italic;
    font-weight: 700;
  }
`

export default HomeBanner
