import React from 'react'
import styled from 'styled-components'

interface Props {
  biography: string[]
}
const Biography: React.FC<Props> = ({ biography }: Props) => {
  return (
    <Content>
      {biography.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </Content>
  )
}

const Content = styled.div`
  ${(props) => props.theme.fonts.xxxxlwide};
  color: ${(props) => props.theme.colors.darkGreen};
`

export default Biography
