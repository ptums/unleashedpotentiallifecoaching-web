import React from 'react'
import styled from 'styled-components'
import ImageWrapper from 'components/atoms/ImageWrapper'

interface Props {
  description: string;
  title: string;
  imageUrl: string | null
}
const RowWidget: React.FC<Props> = ({ description, title, imageUrl }: Props) => {
  return (
    <Widget>
      <ImageWrapper
        src={imageUrl}
        width={525}
        height={525}
        alt={title}
        radius="0"
      />
      <Message>
          <Header>{title}</Header>
          <Description>{description}</Description>
      </Message>
    </Widget>
  )
}

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 88px;

  @media(min-width:${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content:space-between;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      justify-content:space-between;
    }
  }
`

const Message = styled.div`
  max-width: 500px;
  margin: 64px 0;
`
const Header = styled.p`
  ${props => props.theme.fonts.xxxxxxxl};
  color: ${props => props.theme.colors.standardGreen};
  font-family: ${props => props.theme.fonts.playFairDisplay};
  font-style: italic;
  text-shadow: ${props => props.theme.colors.shadowNormal};
`
const Description = styled.p`
  ${props => props.theme.fonts.xxxxxxlwide};
  color: ${props => props.theme.colors.standardGreen};
`

export default RowWidget;