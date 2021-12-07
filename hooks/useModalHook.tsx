import React, { useState } from 'react'

const useModalHook = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<number>(0)

  const toggleModal = () => {
    setOpacity(0)
    setIsOpen(!isOpen)
  }

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1)
    }, 100)
  }

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0)
      setTimeout(resolve, 300)
    })
  }

  return [beforeClose, afterOpen, toggleModal, isOpen, opacity] as const
}

export default useModalHook
