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
  ${(props) => props.theme.fonts.xl};
  text-align: left;
  font-style: italic;
  margin: 0 4px;
  padding: 0;
  color: ${(props) => props.theme.colors.tan};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    ${(props) => props.theme.fonts.xxxl};
    text-align: center;
    margin: 8px;
  }
`

const SiteSubTitle = styled.p`
  ${(props) => props.theme.fonts.base};
  text-align: left;
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  color: ${(props) => props.theme.colors.standardGreen};

  font-style: italic;
  margin: 0 4px;
  padding-bottom: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    ${(props) => props.theme.fonts.lg};
    text-align: center;
    margin: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    ${(props) => props.theme.fonts.lg};
    text-align: center;
    margin: 0;
    padding: 0;
  }
`

export default Header
