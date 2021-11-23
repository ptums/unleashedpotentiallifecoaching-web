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
        <Image src={imageUrl} alt="Unleashed Potential" width={283} height={283} layout="fixed" />
      </ImageContainer>
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 64px;
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
`

export default FeaturedBlock
