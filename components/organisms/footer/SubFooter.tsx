import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const SubFooter = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <SubFooterWrapper>
      <p>Unleased Potential ©️ {year}</p>
      <FooterLinks>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/disclaimer">
          <a>Disclaimer</a>
        </Link>
        <Link href="/sitemap.xml">
          <a>Sitemap</a>
        </Link>
      </FooterLinks>
    </SubFooterWrapper>
  )
}

const SubFooterWrapper = styled.div`
  margin-top: 64px;
  border-top: 1.5px solid ${(props) => props.theme.colors.khaki};
  ${(props) => props.theme.fonts.lg};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const FooterLinks = styled.div`
  margin: 1em 0;

  a {
    color: inherit;
    text-decoration: none;
    font-family: ${(props) => props.theme.fonts.playFairDisplay};
    font-style: italic;
    font-weight: 400;

    &:not(:last-child)::after {
      content: '|';
      margin: 0 16px;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export default SubFooter
