import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface Props {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  btnPadding: string
}
const Button: React.FC<Props> = ({ handleClick, children, btnPadding }: Props) => {
  return (
    <Container btnPadding={btnPadding} onClick={(e) => handleClick(e)}>
      {children}
    </Container>
  )
}

interface BtnProps {
  btnPadding: string
}
const Container = styled.button<BtnProps>`
  margin: 8px 24px;
  border: 0;
  outline: 0;
  padding: ${({ btnPadding }) => btnPadding};
  ${(props) => props.theme.fonts.xxxxxl};
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
