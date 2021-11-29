import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface Props {
  src: string
  width: number | string
  height: number | string
  radius?: number | string
  alt: string
}

const ImageWrapper: React.FC<Props> = ({ src, width, height, alt, radius }: Props) => {
  const imageProps = { src, width, height, alt, radius }
  return (
    <Container radius={radius}>
      <Image {...imageProps} layout="intrinsic" />
    </Container>
  )
}

interface ContainerProps {
  radius?: string | number
}
const Container = styled.div<ContainerProps>`
  span {
    img {
      border-radius: ${({ radius }) => (radius ? radius + 'px' : `8px`)};
      margin: auto !important;
    }
  }
`

export default ImageWrapper
