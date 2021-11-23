import React from 'react'
import styled from 'styled-components'
import Menu from 'components/Header/Menu'

const Header = () => (
  <HeaderContainer>
    <SiteLogo>Unleashed Potential: Life Coaching</SiteLogo>
    <Menu />
  </HeaderContainer>
)

const SiteLogo = styled.p`
  ${(props) => props.theme.fonts.xxxxxxl};
  text-align: center;
  font-weight: medium;
  font-style: italic;
  color: ${(props) => props.theme.colors.tan};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
`
const HeaderContainer = styled.header`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    max-width: 1200px;
  }
`

export default Header
