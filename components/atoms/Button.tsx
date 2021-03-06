import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface Props {
  handleClick: (e: MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  btnPadding: string
  fontSize?: string
}
const Button = ({ handleClick, children, btnPadding, fontSize }: Props) => {
  return (
    <Container fontSize={fontSize} btnPadding={btnPadding} onClick={handleClick}>
      {children}
    </Container>
  )
}

interface BtnProps {
  btnPadding: string
  fontSize?: string
}
const Container = styled.button<BtnProps>`
  border: 0;
  outline: 0;
  padding: ${({ btnPadding }) => btnPadding};
  ${(props) => {
    const { fontSize } = props
    const size = fontSize ? props.theme.fonts[fontSize] : props.theme.fonts.xl
    return size
  }};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkGreen};
  transition: all 0.2s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.standardGreen};
    cursor: pointer;
    box-shadow: ${(props) => props.theme.colors.shadowLight};
  }
`

export default Button
