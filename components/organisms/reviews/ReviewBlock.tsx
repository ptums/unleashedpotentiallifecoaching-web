import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import { Review } from 'types/Review'

const ReviewBlock = ({ name, quote }: Review) => {
  return (
    <Block>
      <Quote>
        <RichText render={quote} />
      </Quote>
      <Name>
        <RichText render={name} />
      </Name>
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  max-width: 520px;
  margin-bottom: 32px;
`

const Quote = styled.span`
  p {
    ${(props) => props.theme.fonts.lg};
    color: ${(props) => props.theme.colors.standardGreen};
    margin: 0;
    padding: 0;
  }
`

const Name = styled.div`
  ${(props) => props.theme.fonts.xl};
  color: ${(props) => props.theme.colors.standardGreen};
`

export default ReviewBlock
