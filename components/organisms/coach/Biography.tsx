import { RichText, RichTextBlock } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'

interface Props {
  biography: RichTextBlock[]
}
const Biography: React.FC<Props> = ({ biography }: Props) => {
  return (
    <ContentWrapper>
      <RichText render={biography} />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  ${(props) => props.theme.fonts.xlwide};
  color: ${(props) => props.theme.colors.darkGreen};
  margin: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    margin: 0;
  }
`

export default Biography
