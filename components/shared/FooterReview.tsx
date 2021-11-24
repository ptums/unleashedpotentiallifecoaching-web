import React from 'react'
import styled from 'styled-components'
import { Review } from 'types/Review'
import DarkGreenContainer from 'layouts/DarkGreenContainer'

const FooterReview: React.FC<Review> = ({ name, quote }: Review) => {
  return (
    <DarkGreenContainer>
      <Title>Client Love</Title>
      <MessageContainer>
      <Message>{quote}</Message>
      <Name>- {name}</Name>
      </MessageContainer>
    </DarkGreenContainer>
  )
}

const Title = styled.p`
  ${(props) => props.theme.fonts.xxxxxxxxl};
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
const Message = styled.p`
  ${(props) => props.theme.fonts.xxxxxxlwide};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  font-style: italic;
  text-align: center;
  font-weight: 400;
`

const Name = styled.p`
  ${(props) => props.theme.fonts.xxxxxxlwide};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  font-weight: 700;
  text-align: right;
`

export default FooterReview
