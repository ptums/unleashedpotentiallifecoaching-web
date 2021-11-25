import React from 'react'
import styled from 'styled-components'
import Banner from 'components/organisms/footer/Banner'
import Contact from 'components/organisms/footer/Contact'
import Form from 'components/organisms/footer/Form'
import Container from 'layouts/Container'

const Footer = () => {
  return (
    <FooterContainer>
      <Banner />
      <Container>
        <Block>
          <Contact />
          <Form />
        </Block>
      </Container>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  margin: 72px 0;
  width: 100%;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`
export default Footer
