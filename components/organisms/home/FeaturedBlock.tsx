import ImageWrapper from 'components/atoms/ImageWrapper'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import { FeaturdContent } from 'types/Home'

const FeaturedBlock: React.FC<FeaturdContent> = ({ imageUrl, header, body }: FeaturdContent) => {
  return (
    <Block>
      <TextContainer>
        <RichText render={header} />
        <RichText render={body} />
      </TextContainer>
      <ImageWrapper src={imageUrl} width={450} height={450} alt="Unleashed Potential" />
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TextContainer = styled.div`
  text-align: center;
  max-width: 600px;

  h2:first-child {
    ${(props) => props.theme.fonts.xxl};
    font-family: ${(props) => props.theme.fonts.playFairDisplay};
    font-style: italic;
    color: ${(props) => props.theme.colors.standardGreen};
  }

  p {
    ${(props) => props.theme.fonts.xl};
    color: ${(props) => props.theme.colors.standardGreen};
  }
`

export default FeaturedBlock
