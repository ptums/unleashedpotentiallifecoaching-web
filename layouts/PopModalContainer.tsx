import React from 'react'
import styled from 'styled-components'
import { BaseModalBackground, ModalProvider } from 'styled-react-modal'

interface Props {
  children: React.ReactNode
}

const PopModalContainer = ({ children }: Props) => (
  <ModalProvider backgroundComponent={FadingBackground}>{children}</ModalProvider>
)

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`

export default PopModalContainer
