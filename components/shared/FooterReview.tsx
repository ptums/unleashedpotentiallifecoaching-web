import React from 'react'
import styled from 'styled-components'
import { Review } from 'types/Review'

const FooterReview: React.FC<Review> = ({ name, quote }: Review) => {
  return (
    <Container>
       {name}
       {quote}
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
`
export default FooterReview