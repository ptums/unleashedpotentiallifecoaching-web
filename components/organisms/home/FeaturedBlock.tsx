import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FeaturdContent } from 'types/Home'

const FeaturedBlock: React.FC<FeaturdContent> = ({ imageUrl, header, body }: FeaturdContent) => {
  return (
    <Block>
      <TextContainer>
        <p>{header}</p>
        {body.map((child) => <p key={child.text}>{child.text}</p>)}
      </TextContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="Unleashed Potential" width={450} height={450} layout="intrinsic" />
      </ImageContainer>
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px 32px;

  @media(min-width: ${props => props.theme.breakpoints.lg}){
    flex-direction: row;
    justify-content: space-between;
  }
`

const ImageContainer = styled.div`
  span {
    img {
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`
const TextContainer = styled.div`
  text-align: center;
  max-width: 600px;

  p:first-child {
    ${props => props.theme.fonts.xxxxxxl};
    font-family: ${props => props.theme.fonts.playFairDisplay};
    font-style: italic;
    color: ${props => props.theme.colors.standardGreen};
  }

  p:not(:first-child) {
    ${props => props.theme.fonts.xxxxxl};
    color: ${props => props.theme.colors.standardGreen};
  }
`

export default FeaturedBlock
