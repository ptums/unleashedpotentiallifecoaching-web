import React from 'react'

interface Props {
  children: React.ReactNode
  handleOnClick: () => void
  index: number
}

const CloseMenuWrapper = ({ children, handleOnClick, index }: Props) => (
  <div tabIndex={index} onKeyPress={handleOnClick} onClick={handleOnClick} role="button">
    {children}
  </div>
)

export default CloseMenuWrapper
