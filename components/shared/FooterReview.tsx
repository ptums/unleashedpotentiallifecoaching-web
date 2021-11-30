import DarkGreenContainer from 'layouts/DarkGreenContainer'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import { Review } from 'types/Review'

const FooterReview = ({ name, quote }: Review) => {
  return (
    <DarkGreenContainer>
      <Title>Client Love</Title>
      <MessageContainer>
        <Message>
          <RichText render={quote} />
        </Message>
        <Name id="contact">
          - <RichText render={name} />
        </Name>
      </MessageContainer>
    </DarkGreenContainer>
  )
}

const Title = styled.p`
  ${(props) => props.theme.fonts.xxxxl};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  font-style: italic;
  text-align: center;
`

const MessageContainer = styled.div`
  padding: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0px 224px;
  }
`
const Message = styled.span`
  p {
    ${(props) => props.theme.fonts.xxlwide};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.playFairDisplay};
    text-align: center;
    font-weight: 400;
  }
`

const Name = styled.span`
  h5::before {
    content: '- ';
  }
  h5 {
    ${(props) => props.theme.fonts.xxlwide};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.playFairDisplay};
    font-weight: 700;
    text-align: right;
    margin-top: 0;
  }
`

export default FooterReview
