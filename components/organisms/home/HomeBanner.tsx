import React from 'react'
import styled from 'styled-components'
import { Banner } from 'types/Home'

const HomeBanner: React.FC<Banner> = ({ imageUrl, lineOne, lineTwo }: Banner) => {
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
  background: url(${({ image }) => image}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 640px;
  border: 1px solid black;
`

const BannerText = styled.div`
  text-align: center;
  margin: 42px;

  @media (min-width: ${props => props.theme.breakpoints.lg}){
    margin: 27em auto;
  }

  h1 {
    ${(props) => props.theme.fonts.xxxxxxxxxl};
    margin: 0;
    padding: 0;
    text-shadow: ${(props) => props.theme.colors.shadowNormal};
    color: ${(props) => props.theme.colors.cream};
    font-weight: 700;
  }

  h2 {
    ${(props) => props.theme.fonts.xxxxxxxxxl};
    color: ${props => props.theme.colors.white};
    text-shadow: ${(props) => props.theme.colors.shadowNormal};    
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.playFairDisplay};
    font-style: italic;
    font-weight: 400;
  }
`

export default HomeBanner
