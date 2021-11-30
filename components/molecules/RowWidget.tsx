import ImageWrapper from 'components/atoms/ImageWrapper'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'

interface Props {
  description: string
  title: RichTextBlock[]
  imageUrl: string | null
}
const RowWidget = ({ description, title, imageUrl }: Props) => {
  const altText = title[0].text

  return (
    <Widget>
      <ImageWrapper src={imageUrl} width={525} height={525} alt={altText} radius="0" />
      <Message>
        <Header>
          <RichText render={title} />
        </Header>
        <Description>{description}</Description>
      </Message>
    </Widget>
  )
}

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 88px;
  padding: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`

const Message = styled.div`
  max-width: 500px;
  margin: 64px 0;
`
const Header = styled.div`
  h3 {
    ${(props) => props.theme.fonts.xxxl};
    color: ${(props) => props.theme.colors.standardGreen};
    font-family: ${(props) => props.theme.fonts.playFairDisplay};
    font-style: italic;
    text-shadow: ${(props) => props.theme.colors.shadowNormal};
  }
`
const Description = styled.p`
  ${(props) => props.theme.fonts.xlmed};
  color: ${(props) => props.theme.colors.standardGreen};
`

export default RowWidget
