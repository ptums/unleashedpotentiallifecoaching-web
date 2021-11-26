import Menu from 'components/shared/Header/Menu'
import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <HeaderContainer>
    <SiteLogo>Unleashed Potential: Life Coaching</SiteLogo>
    <SiteSubTitle>We help you find your vibe</SiteSubTitle>
    <Menu />
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.colors.shadowLight};
  z-index: 99;
`
const SiteLogo = styled.p`
  ${(props) => props.theme.fonts.xxxxxxxl};
  text-align: center;
  font-weight: medium;
  font-style: italic;
  margin: 8px;
  padding: 0;
  color: ${(props) => props.theme.colors.tan};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
`

const SiteSubTitle = styled.p`
  ${(props) => props.theme.fonts.xxxxl};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  color: ${(props) => props.theme.colors.standardGreen};
  text-align: center;
  font-weight: medium;
  font-style: italic;
  margin: 0;
  padding: 0;
`

export default Header
