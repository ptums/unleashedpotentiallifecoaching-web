import Banner from 'components/organisms/footer/Banner'
import Contact from 'components/organisms/footer/Contact'
import Form from 'components/organisms/footer/Form'
import SubFooter from 'components/organisms/footer/SubFooter'
import Container from 'layouts/Container'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <Banner />
      <Container>
        <Block>
          <Contact />
          <Form />
        </Block>
        <SubFooter />
      </Container>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  margin-top: 72px;
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
