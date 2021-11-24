import React from 'react'
import styled from 'styled-components'
import Menu from 'components/shared/Header/Menu'
import Container from 'layouts/Container'

const Header = () => (
  <Container>
    <SiteLogo>Unleashed Potential: Life Coaching</SiteLogo>
    <SiteSubTitle>We help you find your vibe</SiteSubTitle>
    <Menu />
  </Container>
)

const SiteLogo = styled.p`
  ${(props) => props.theme.fonts.xxxxxxl};
  text-align: center;
  font-weight: medium;
  font-style: italic;
  margin:24px auto 8px; auto;
  padding:0;
  color: ${(props) => props.theme.colors.tan};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
`

const SiteSubTitle = styled.p`
  ${(props) => props.theme.fonts.xxxxl};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  color: ${props => props.theme.colors.standardGreen};
  text-align: center;
  font-weight: medium;
  font-style: italic;
  margin: 0 0 24px 0; 
  padding:0;
`

export default Header
