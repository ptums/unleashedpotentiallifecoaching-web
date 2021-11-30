import React from 'react'
import styled from 'styled-components'

const Banner = () => (
  <>
    <Header>
      Give us a call, shoot us an email, follow us on social media, or fill out the form below...
    </Header>
    <SubTitle>We’d love to hear from you!</SubTitle>
  </>
)

const Header = styled.p`
  ${(props) => props.theme.fonts.xl};
  color: ${(props) => props.theme.colors.standardGreen};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  text-align: center;
`

const SubTitle = styled.p`
  ${(props) => props.theme.fonts.xxxxl};
  color: ${(props) => props.theme.colors.standardGreen};
  font-family: ${(props) => props.theme.fonts.playFairDisplay};
  text-align: center;
  font-weight: bold;
  margin: 0;
`
export default Banner
